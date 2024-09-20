<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInite50b012c7c46802e803662cfcd03f9ac
{
    public static $prefixLengthsPsr4 = array (
        'E' => 
        array (
            'Estudos\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Estudos\\' => 
        array (
            0 => __DIR__ . '/../..' . '/PHP',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInite50b012c7c46802e803662cfcd03f9ac::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInite50b012c7c46802e803662cfcd03f9ac::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInite50b012c7c46802e803662cfcd03f9ac::$classMap;

        }, null, ClassLoader::class);
    }
}
