<?php

namespace App\Controller;

use App\Repository\BookRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class BookController extends \Symfony\Bundle\FrameworkBundle\Controller\AbstractController
{
    /**
     * @Route("/books", name="app_books", options={"expose" = true})
     */
    public function books(BookRepository $bookRepository):JsonResponse
    {
        $books = $bookRepository->findAll();
        $serializer = $this->container->get('serializer');
        $jsonData = $serializer->serialize($books,'json');
        return new JsonResponse($jsonData);
    }
    /**
     * @Route("/bookList", name="app_book_list")
     */
    public function bookList ():Response
    {
        return $this->render('/books/all_books.html.twig');
    }

}