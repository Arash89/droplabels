<?php
    include("simple_html_dom.php"); 
?>

<?php if (!empty($title)) : ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>
<table class="<?php print $class; ?> col-xs-12"<?php print $attributes; ?>>
  <?php if (!empty($caption)) : ?>
    <caption><?php print $caption; ?></caption>
  <?php endif; ?>

  <tbody>
    <?php foreach ($rows as $row_number => $columns): ?>
      <tr <?php if ($row_classes[$row_number]) { print 'class="' . $row_classes[$row_number] .'"';  } ?>>
        <?php foreach ($columns as $column_number => $item): ?>
          <td <?php if ($column_classes[$row_number][$column_number]) { print 'class="' . $column_classes[$row_number][$column_number] .'"';  } ?>>
            <?php print droplabels_video_view($item, 0); ?>
          </td>
        <?php endforeach; ?>
      </tr>
    <?php endforeach; ?>
  </tbody>
</table>

<?php

function droplabels_video_view ($item, $id) {

$myView = str_get_html('<div id="app-player-droplabels-id" class="slider-app-droplabels" ng-app="app-player-droplabels" ng-controller="ctr-player-droplabels">
  <div class="row first-page-player">
    <div id="player_droplabels_col" class="col-xs-12 text-center">
          <div class="embed-responsive embed-responsive-16by9">
          <div id="player_droplabels'.$id.'" class="embed-responsive-item"></div>
        </div>
    </div>  
  </div>

  <div class="row droplabels-'.$id.' row-slider first-page-player">
    <div id="fixWinMother" class="col-xs-12 text-center">
      <div class="fix-win clearfix">
          <div class="next-bt left-bt">
            <span class="glyphicon glyphicon-backward" aria-hidden="true"></span>
          </div>
          <div class="next-bt right-bt">
            <span class="glyphicon glyphicon-forward" aria-hidden="true"></span>
          </div>   
        <div class="slider clearfix">

          <div class="thumbnail"  ng-repeat="clip in clips['.$id.']">
            <img class="slide-thb" src="{{clip.pict}}" ng-click="changeSource('.'$index'.', '.$id.')" />
            <p>{{clip.title}}</p>
          </div>

        </div> <!--  End of .slider  -->       
      </div> <!--  End of .fix-win  -->
    </div> <!--  End of #fixWinMother  -->
   </div> <!--  End of row  -->
</div>');




$myHtml = str_get_html($item);

// finding the source of playList
$myIframeSrc = $myHtml->find('.user-video-droplabels')[0]->find('iframe')[0]->getAttribute('src');

$listIndexStart = strpos($myIframeSrc, "list=") + 5;
$listIndexEnd = strpos($myIframeSrc, "&", $listIndexStart + 1);
$listLength = $listIndexEnd - $listIndexStart;

if ($listIndexEnd != false) {
  $myIframeSrc = substr($myIframeSrc, $listIndexStart, $listLength); 
}
else {
  $myIframeSrc = substr($myIframeSrc, $listIndexStart);    
}

//phpVarToJs("droplabels", "playList", $myIframeSrc);
newObjecInstance($id, $myIframeSrc);

// finding ifram to replace it with our HTML view
$myHtml->find('.user-video-droplabels')[0]->find('iframe')[0]->parent()->innertext = $myView;


return $myHtml;
}



function newObjecInstance ($jsId, $jsPlaylist) {

  echo "<script id='hagh' type='text/javascript'>";
  echo "var obj = new droplabels($jsId, '$jsPlaylist');";
  echo "droplabelsObjects.push(obj);";
  echo "console.log('droplabelsObjects in PHP->');";
  echo "console.log(droplabelsObjects);";
  echo "</script>";

} 



function phpVarToJs($jsObject, $jsProperty, $jsValue) {

  echo "<script id='hagh' type='text/javascript'>";
  echo "if ($jsObject === undefined) {var $jsObject = {};}";
  if(is_numeric($jsValue)){
      echo "$jsObject.$jsProperty = $jsValue;";
  }
  else{
      echo "$jsObject.$jsProperty = '$jsValue';";
  }
  echo "console.log('droplabels.playList in PHP->' + droplabels.playList)";
  echo "</script>";

} 



?>