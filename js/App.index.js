



( function( $window, $document, $ ){

    var index = (function()
    {
        function Init()
        {
            console.log( "index init" );
            loadData();
        }

        function loadData()
        {
            $( App.server ).on( App.Events.LOAD_COMPLETE, onComplete );
            App.server.getData();
        }

        function onComplete( $e, $data )
        {
            console.log( $data );           // { data:{...}}
            console.log( $data.data.name ); // zeronine
        }

        return{
            Init : Init
        }
    })();

    $( $document ).ready( function(){
        App.index = index;
        App.index.Init();
    });

})( window, document, jQuery );