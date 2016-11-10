
<?php
  function javascriptPageName ($jsValue) {
    echo "<script id='page-name' type='text/javascript'>";  
    echo "if (droplabelsPageName === undefined) { var droplabelsPageName = '$jsValue';}";
    echo "else { droplabelsPageName = '$jsValue';}";
    echo "</script>";
  } 
?>
