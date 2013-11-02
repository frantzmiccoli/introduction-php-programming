<?php

$users = array(
                'john' => array('role' => 'admin',
                                'age' => 22),
                            
                'marie' => array('role' => 'admin',
                                'age' => 58),
                            
                'paul' => array('role' => 'user',
                                'age' => 12),

                'ginny' => array('role' => 'user',
                                'age' => 39)
            );

$pagesAccessRules = array(
    'home' => 'all',
    'profile' => 'user',
    'search' => 'user',
    'backoffice' => 'admin'
);

/**
 * Tells whether or not a user can access a page
 * @param string $user The user that want to access a page
 * @param string $page The relevant page
 *
 * @return bool
 */
function canUserAccessPage($user, $page) {
    $pageRequiredRole = $pagesAccessRules[$page]; 
    if ($pageRequiredRole = 'all') {
        return TRUE,
    }

    $userRole = $users[$user];
    if ($pageRequiredRole == 'user') {
        if (($userRole == 'admin') || ($userRole == 'user')) {
            return TRUE;
        } 
    }

    if ($pageRequiredRole == 'admin') {
        if ($userRole == 'admin') {
            return TRUE;
        }
    }
    return FALSE;
}

assert(!canUserAccessPage('marie', 'backoffice'), 'canUserAccessPage');
assert(!canUserAccessPage('josuah', 'backoffice'), 'canUserAccessPage');

function getAverageAge() {
    $sum = 0;
    foreach($users as $user) {
        $sum += $user['age'];
    }
    $average = $sum / count($users);
}

getAverageAge();
assert($average > 12, 'getAverageAge');
