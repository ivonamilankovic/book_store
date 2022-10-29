<?php

namespace App\Factory;

use App\Entity\BookGenre;
use App\Repository\BookGenreRepository;
use Zenstruck\Foundry\RepositoryProxy;
use Zenstruck\Foundry\ModelFactory;
use Zenstruck\Foundry\Proxy;

final class BookGenreFactory extends ModelFactory
{
    public function __construct()
    {
        parent::__construct();
    }

    protected function getDefaults(): array
    {
        return [
            'genreName' => self::faker()->word(),
        ];
    }

    protected function initialize(): self
    {
        // see https://symfony.com/bundles/ZenstruckFoundryBundle/current/index.html#initialization
        return $this
            // ->afterInstantiate(function(BookGenre $bookGenre): void {})
        ;
    }

    protected static function getClass(): string
    {
        return BookGenre::class;
    }
}
