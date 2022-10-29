<?php

namespace App\DataFixtures;

use App\Entity\User;
use App\Factory\BookFactory;
use App\Factory\BookGenreFactory;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $user = new User();
        $user->setEmail('iv@test.com')
            ->setName('iv')
            ->setPassword('$2a$12$lB.tiwuH.BPu4kH.9ggvW.ktiKQA1owu/pY98PJ4Eagkw/XLFFInC');
        $manager->persist($user);

        BookGenreFactory::createMany(20);
        BookFactory::createMany(15);

        $manager->flush();
    }
}
