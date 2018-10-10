window.sqlitePlugin = {
  openDatabase : function( a, b, c ) {
    var dbName = a.name;

    var d = {
      executeSql : function( a, b, c ) {
          $.ajax({
            url: 'http://localhost/cordova/executeSql.php',
            data: { db : dbName, query : a },
            type: "POST",
            dataType: "JSON",
            async: true,
            success: function (result) {

              var res = {
                rows : { 
                  length : result.length, 
                  item : function( i ) {
                    return result[i];
                  }
                }
              };

              c( res );
            },
            error: function (e) {
              console.log( e );
            },
          });
      }
    }
    b( d );
  }
};