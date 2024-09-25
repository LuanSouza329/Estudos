<?php

// autoload_real.php @generated by Composer

class ComposerAutoloaderInitba6297ef01fc9be99e0d4e0596722574
{
    private static $loader;

    public static function loadClassLoader($class)
    {
        if ('Composer\Autoload\ClassLoader' === $class) {
            require __DIR__ . '/ClassLoader.php';
        }
    }

    /**
     * @return \Composer\Autoload\ClassLoader
     */
    public static function getLoader()
    {
        if (null !== self::$loader) {
            return self::$loader;
        }

        spl_autoload_register(array('ComposerAutoloaderInitba6297ef01fc9be99e0d4e0596722574', 'loadClassLoader'), true, true);
        self::$loader = $loader = new \Composer\Autoload\ClassLoader(\dirname(__DIR__));
        spl_autoload_unregister(array('ComposerAutoloaderInitba6297ef01fc9be99e0d4e0596722574', 'loadClassLoader'));

        require __DIR__ . '/autoload_static.php';
        call_user_func(\Composer\Autoload\ComposerStaticInitba6297ef01fc9be99e0d4e0596722574::getInitializer($loader));

        $loader->register(true);

        return $loader;
    }
}