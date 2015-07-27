/**
 * Created by jayson.inf on 27/07/2015.
 */
pessoas
    .factory('PessoasSrv', function($resource) {
        return $resource(
            'index.php/pessoas/:id', {
                id: '@id'
            },
            {
                update: {
                    method: 'PUT',
                    url: 'index.php/pessoas/:id/'
                }
            }
        );
    });