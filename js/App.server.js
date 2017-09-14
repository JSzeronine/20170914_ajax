



( function( $window, $document, $ ){
    
    var server = (function()
    {
        function Init()
        {
            console.log( "server init" );
        }

        function getData()
        {
            $.ajax({
                type : "GET",
                url : "./data/data.json",
                dataType : "json",
                success : function( $data )
                {
                    $( App.server ).trigger( App.Events.LOAD_COMPLETE, $data );
                }
            });
        }

        return{
            Init : Init,
            getData : getData
        }
    })();

    $( $document ).ready( function(){
        App.server = server;
        App.server.Init();
    });

})( window, document, jQuery );