<?php

namespace App\Entity;

use App\Repository\BookRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=BookRepository::class)
 */
class Book
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups("book_details")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("book_details")
     */
    private $author;

    /**
     * @ORM\Column(type="integer")
     * @Groups("book_details")
     */
    private $price;

    /**
     * @ORM\Column(type="string", length=5)
     * @Groups("book_details")
     */
    private $releasedYear;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("book_details")
     */
    private $name;

    /**
     * @ORM\Column(type="text")
     * @Groups("book_details")
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("book_details")
     */
    private $image;

    /**
     * @ORM\Column(type="integer", nullable=true)
     * @Groups("book_details")
     */
    private $storedAmount;

    /**
     * @ORM\Column(type="integer")
     * @Groups("book_details")
     */
    private $pageNumber;

    /**
     * @ORM\ManyToOne(targetEntity=BookGenre::class, inversedBy="books")
     * @ORM\JoinColumn(nullable=false)
     */
    private $genre;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getAuthor(): ?string
    {
        return $this->author;
    }

    public function setAuthor(string $author): self
    {
        $this->author = $author;

        return $this;
    }

    public function getPrice(): ?int
    {
        return $this->price;
    }

    public function setPrice(int $price): self
    {
        $this->price = $price;

        return $this;
    }

    public function getReleasedYear(): ?string
    {
        return $this->releasedYear;
    }

    public function setReleasedYear(string $releasedYear): self
    {
        $this->releasedYear = $releasedYear;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getStoredAmount(): ?int
    {
        return $this->storedAmount;
    }

    public function setStoredAmount(?int $storedAmount): self
    {
        $this->storedAmount = $storedAmount;

        return $this;
    }

    public function getPageNumber(): ?int
    {
        return $this->pageNumber;
    }

    public function setPageNumber(int $pageNumber): self
    {
        $this->pageNumber = $pageNumber;

        return $this;
    }

    public function getGenre(): ?BookGenre
    {
        return $this->genre;
    }

    public function setGenre(?BookGenre $genre): self
    {
        $this->genre = $genre;

        return $this;
    }

}
