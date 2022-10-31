<?php

namespace App\Factory;

use App\Entity\Book;
use App\Repository\BookRepository;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

final class BookFactory extends ModelFactory
{
    public function __construct()
    {
        parent::__construct();
    }

    protected function getDefaults(): array
    {
        return [
            'author' => self::faker()->name(),
            'price' => self::faker()->randomNumber(2, true),
            'releasedYear' => self::faker()->year(),
            'name' => self::faker()->text(25),
            'description' => self::faker()->paragraph(20),
            'image' => "https://api.lorem.space/image/book?w=150&h=220",
            'storedAmount' => self::faker()->numberBetween(0,100),
            'pageNumber' => self::faker()->numberBetween(100,1000),
            'genre' =>BookGenreFactory::random()
        ];
    }

    protected function initialize(): self
    {
        // see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
        return $this
            // ->afterInstantiate(function(Book $book): void {})
        ;
    }

    protected static function getClass(): string
    {
        return Book::class;
    }
}
