<div class="container ribbon">
  <div calss="row" style="position: relative;">
    <div class="col-xs-12" style="height:10px;background-color: rgb(6,158,219)">
    </div>

    <div class="donat-menu-in">
        <div class="col-xs-12">                  
          <form style="text-align:center"  action="https://www.paypal.com/cgi-bin/webscr" method="post"  target="_top">
          <input type="hidden" name="cmd" value="_s-xclick">
          <input type="hidden" name="hosted_button_id" value="JKCZ8PDDPG2NA">
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
          </form>
        </div>
    </div>

  </div>
</div>

<div class="container name-slogan">
  <div class="row droplabels-title">
    <div class="col-xs-12  text-center">
        <?php if (!empty($site_name)): ?>
          <a class="name" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><?php print $site_name; ?></a>
        <?php endif; ?>      
    </div>
  </div>
    
  <div class="row droplabels-slogan">
    <div class="col-xs-12  text-center">
        <?php if (!empty($site_slogan)): ?>
          <p class="lead"><?php print $site_slogan; ?></p>
        <?php endif; ?>
    </div>

  </div>
</div>

  <div class="<?php print $container_class; ?> menu-bottons">
    <div class="navbar-header">
      <?php if ($logo): ?>
        <a class="logo pull-left" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
          <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" />
        </a>
      <?php endif; ?>

      <?php // if (!empty($site_name)): ?>
        <!-- a class="name navbar-brand" href="<?php // print $front_page; ?>" title="<?php  // print t('Home'); ?>"><?php  // print $site_name; ?></a-->
      <?php // endif; ?>

      <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only"><?php print t('Toggle navigation'); ?></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      <?php endif; ?>
    </div>

    <?php if (!empty($primary_nav) || !empty($secondary_nav) || !empty($page['navigation'])): ?>
      <div class="navbar-collapse collapse">
        <nav role="navigation">
          <?php if (!empty($primary_nav)): ?>
            <?php print render($primary_nav); ?>
          <?php endif; ?>
          <?php if (!empty($secondary_nav)): ?>
            <?php print render($secondary_nav); ?>
          <?php endif; ?>
          <?php if (!empty($page['navigation'])): ?>
            <?php print render($page['navigation']); ?>
          <?php endif; ?>
        </nav>
      </div>
    <?php endif; ?>
  </div>