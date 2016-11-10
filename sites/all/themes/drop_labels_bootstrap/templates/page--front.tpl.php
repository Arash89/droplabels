<?php
/**
 * @file
 * Default theme implementation to display a single Drupal page.
 *
 * The doctype, html, head and body tags are not in this template. Instead they
 * can be found in the html.tpl.php template in this directory.
 *
 * Available variables:
 *
 * General utility variables:
 * - $base_path: The base URL path of the Drupal installation. At the very
 *   least, this will always default to /.
 * - $directory: The directory the template is located in, e.g. modules/system
 *   or themes/bartik.
 * - $is_front: TRUE if the current page is the front page.
 * - $logged_in: TRUE if the user is registered and signed in.
 * - $is_admin: TRUE if the user has permission to access administration pages.
 *
 * Site identity:
 * - $front_page: The URL of the front page. Use this instead of $base_path,
 *   when linking to the front page. This includes the language domain or
 *   prefix.
 * - $logo: The path to the logo image, as defined in theme configuration.
 * - $site_name: The name of the site, empty when display has been disabled
 *   in theme settings.
 * - $site_slogan: The slogan of the site, empty when display has been disabled
 *   in theme settings.
 *
 * Navigation:
 * - $main_menu (array): An array containing the Main menu links for the
 *   site, if they have been configured.
 * - $secondary_menu (array): An array containing the Secondary menu links for
 *   the site, if they have been configured.
 * - $breadcrumb: The breadcrumb trail for the current page.
 *
 * Page content (in order of occurrence in the default page.tpl.php):
 * - $title_prefix (array): An array containing additional output populated by
 *   modules, intended to be displayed in front of the main title tag that
 *   appears in the template.
 * - $title: The page title, for use in the actual HTML content.
 * - $title_suffix (array): An array containing additional output populated by
 *   modules, intended to be displayed after the main title tag that appears in
 *   the template.
 * - $messages: HTML for status and error messages. Should be displayed
 *   prominently.
 * - $tabs (array): Tabs linking to any sub-pages beneath the current page
 *   (e.g., the view and edit tabs when displaying a node).
 * - $action_links (array): Actions local to the page, such as 'Add menu' on the
 *   menu administration interface.
 * - $feed_icons: A string of all feed icons for the current page.
 * - $node: The node object, if there is an automatically-loaded node
 *   associated with the page, and the node ID is the second argument
 *   in the page's path (e.g. node/12345 and node/12345/revisions, but not
 *   comment/reply/12345).
 *
 * Regions:
 * - $page['help']: Dynamic help text, mostly for admin pages.
 * - $page['highlighted']: Items for the highlighted content region.
 * - $page['content']: The main content of the current page.
 * - $page['sidebar_first']: Items for the first sidebar.
 * - $page['sidebar_second']: Items for the second sidebar.
 * - $page['header']: Items for the header region.
 * - $page['footer']: Items for the footer region.
 *
 * @see bootstrap_preprocess_page()
 * @see template_preprocess()
 * @see template_preprocess_page()
 * @see bootstrap_process_page()
 * @see template_process()
 * @see html.tpl.php
 *
 * @ingroup templates
 */
require_once("requires/page-function.php"); 
javascriptPageName("front");

?>

  <!-- Start for Goole Analytics -->
  <script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-86662018-1', 'auto');
    ga('send', 'pageview');

  </script>

  <?php // include_once("analyticstracking.php") ?>
  <!-- End for Goole Analytics -->

<header id="navbar" role="banner" class="<?php print $navbar_classes; ?> front-header">
<?php require("requires/header.php") ?>

</header>

<div class="main-container <?php print $container_class; ?> front-container">

  <header role="banner" id="page-header">
    <?php  if (!empty($site_slogan)): ?>
      <p class="lead" style="height: 0px;font-size: 0px"><?php  print $site_slogan; ?></p>
    <?php  endif; ?>

    <?php print render($page['header']); ?>
  </header> <!-- /#page-header -->

  <div class="row aside-in">

    <?php if (!empty($page['sidebar_first'])): ?>
      <aside class="col-sm-3" role="complementary">
        <?php print render($page['sidebar_first']); ?>
      </aside>  <!-- /#sidebar-first -->
    <?php endif; ?>
  </div>  
<div class="ArashJanPHP"><?php $content_column_class=' class="col-sm-12 first-page-section"';?></div>
    <section<?php print $content_column_class; ?>>

      <!-- Start of label definition -->
      <div class="container label-def">
      	<div class="row">
      		<div class="col-xs-10 col-xs-offset-1 label-title">
      			la·bel <span class="label-axon"> /ˈlābəl/</span>

      		</div>
      		<!-- <div class="col-xs-10 col-xs-offset-1 label-axon"> -->
      			
      		<!-- </div> -->

      		<div class="col-xs-10 col-xs-offset-1 label-define">
      		assign to a category, especially inaccurately or restrictively.
      		</div>
      		<div class="col-xs-10 col-xs-offset-1 label-define">
      			synonyms: <span class="synonyms">categorize, classify, class, describe, designate, identify</span>
      		</div>

      	</div>
      </div>
      <!-- End of label definition -->

      <?php if (!empty($page['highlighted'])): ?>
        <div class="highlighted jumbotron"><?php print render($page['highlighted']); ?></div>
      <?php endif; ?>
      <?php if (!empty($breadcrumb)): print $breadcrumb; endif;?>
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if (!empty($title)): ?>
        <h1 class="page-header"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php if (!empty($tabs)): ?>
        <?php print render($tabs); ?>
      <?php endif; ?>
      <?php if (!empty($page['help'])): ?>
        <?php print render($page['help']); ?>
      <?php endif; ?>
      <?php if (!empty($action_links)): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>

      <!-- Start of About Us -->
      <div class="container aboutus">
      <span id="ABOUT"></span>
        <div class="row">
          <div class="col-sm-7 left-col">
            <div class="col-xs-12">
              <img src="sites/all/themes/drop_labels_bootstrap/images/labels/label-about-us-01.jpg">
            </div>
            <div class="col-xs-12 text-white aboutus-p-in">
              <p>
                Drop Labels is a movement dedicated to bringing awareness to how individual and social “labels” have confined and limited us from manifesting who we really are and can be.
              </p>
              <p>
                The Drop Labels campaign includes shared forms of expression through video, words, and images which enlighten us on the many ways we limit ourselves and each other, in order to liberate, unite, self actualize, and empower the unparalleled unique essence we ALL are.
              </p>
            </div>          
          </div>
          <div class="col-sm-5 text-white right-col">
          <img class="vertical-throw-img" src="sites/all/themes/drop_labels_bootstrap/images/labels/aboutus-vetical-throw-03.png">
            <div class="droplabels-list">
              <h3>Drop Labels aims to:</h3>
              <p><span class="glyphicon glyphicon-ok-sign"></span> Create greater unity</p>
              <p><span class="glyphicon glyphicon-ok-sign"></span> Celebrate diversity</p>
              <p><span class="glyphicon glyphicon-ok-sign"></span> Collaborate globally</p>
              <p><span class="glyphicon glyphicon-ok-sign"></span> Encourage sharing</p>
              <p><span class="glyphicon glyphicon-ok-sign"></span> Enable self actualization</p>
              <p><span class="glyphicon glyphicon-ok-sign"></span> Support compassion and empathy</p>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
                <img src="sites/all/themes/drop_labels_bootstrap/images/labels/aboutus-horizontal-throw-02.png" class="width--100">
            </div>
          </div>
        </div>
      </div>
      <!-- End of About Us -->

      <!-- Start of the truth -->
      <span id="THE_TRUTH"></span>
      <div class="container">
          <div class="row">
              <div class="col-xs-12">
                  <img src="sites/all/themes/drop_labels_bootstrap/images/labels/label-the-truth-01.jpg">    
              </div>
          </div>

          <div class="row">
              <div class="col-xs-12">
                  <h2 class="text-center">How does our mind produce labels?</h2> 

                  <div class="col-xs-12 col-sm-4 text-center">
                   <div class="thumbnail fear">
                        <img class="img-thumb-helpus" src="sites/all/themes/drop_labels_bootstrap/images/icons/droplabels-fear.svg" alt="FEAR DROPLABELS">
                        <div class="caption">
                          <h3>FEAR:</h3>
                          <p>
                            We are programmed to sort who is “like us” versus who is not “like us” This is occurs in the unconscious Amygdala, which is part of our limbic system, as a survival mechanism of potential threats based on social construction ideas based from school, family, friends, media, and our surroundings. 
                          </p>

                        </div>
                      </div>
                  </div>  

                  <div class="col-xs-12 col-sm-4 text-center">
                   <div class="thumbnail VERIFY">
                        <img class="img-thumb-helpus" src="sites/all/themes/drop_labels_bootstrap/images/icons/droplabels-verify.svg" alt="VERIFY DROPLABELS">
                        <div class="caption">
                          <h3>VERIFY:</h3>
                          <p>
                            However, what we perceive checks in with the prefrontal cortex of our brain. During this consciously aware moment, the frontal lobe uses logic and reason to question the sudden “threat” or the stereotypes and beliefs about a person. Once it has come to a decision, the message is sent to the Amygdala, which is then acted on or inhibits it’s activation.
                          </p>
                        </div>
                      </div>
                  </div> 


                  <div class="col-xs-12 col-sm-4 text-center">
                   <div class="thumbnail ACTION">
                        <img class="img-thumb-helpus" src="sites/all/themes/drop_labels_bootstrap/images/icons/droplabels-action.svg" alt="ACTION DROPLABELS">
                        <div class="caption">
                          <h3>ACTION:</h3>
                          <p>
                            The only way to reduce prejudicing through labels, is by questioning and becoming comfortable with being uncomfortable by acknowledging one’s biases, and directly challenge the thoughts.As well as, expanding one’s knowledge and social groups.
                          </p>
                        </div>
                      </div>
                  </div> 
              </div>
              <div class="row">
                <div class="col-xs-12">
                    <img src="sites/all/themes/drop_labels_bootstrap/images/labels/thetruth-horizontal-throw-01.jpg" class="width--100">
                </div>
              </div>  
          </div>
      </div>
      <!-- End of the truth -->

      <!-- Start of the help us title -->
      <span id="MOVEMENT"></span>
      <div class="container">
          <div class="row">
              <div class="col-xs-12 helpus-title">
              <h1 class="text-center text-white">YES! SO YOU WANT JOIN THE MOVEMENT! THAT'S AWESOME!</h1>
              </div>

              <div class="row">
                <div class="col-xs-12">
                    <img src="sites/all/themes/drop_labels_bootstrap/images/labels/boxes-horizontal-throw-01.jpg" class="width--100" style="margin-bottom: 20px;">
                </div>
              </div>    
          </div>
      </div>        
      <!-- Start of the help us tirle -->

      <!-- Start of the Boxes title -->
      <div class="container">

          <div class="row donate-in">
            <div class="col-xs-12">                  
              <form style="text-align:center"  action="https://www.paypal.com/cgi-bin/webscr" method="post"  target="_top">
              <input type="hidden" name="cmd" value="_s-xclick">
              <input type="hidden" name="hosted_button_id" value="JKCZ8PDDPG2NA">
              <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
              <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
              </form>
            </div>
          </div>

          <div class="row">

              <div class="col-sm-5 col-sm-offset-1" >
              <img src="sites/all/themes/drop_labels_bootstrap/images/labels/droplabels-funds-03.png" class="box-like-background width--100">
               
                <div class="row founds-box text-white" style="top:-70px">
                  <div class="col-xs-10 col-xs-offset-1 text-white">
                    If you are able to donate in any way that is the most helpful thing to keep us spreading the word.
                  </div> 
                </div>
              </div>

              <div class="col-sm-5">
              <img src="sites/all/themes/drop_labels_bootstrap/images/labels/droplabels-friends-03.png" class="box-like-background width--100">
               
                <div class="row founds-box text-white">
                  <div class="col-xs-10 col-xs-offset-1 text-white">
                    Spread the word! Try to encourage others to join the cause by logging in to post their personal experience of having a label video, and share the video around once it's posted to the site.
                  </div> 
                </div>  
              </div>

          </div>


          <div class="row">

              <div class="col-sm-5 col-sm-offset-1" >
              <img src="sites/all/themes/drop_labels_bootstrap/images/labels/droplabels-videos-03.png" class="box-like-background width--100">
               
                <div class="row founds-box text-white">
                  <div class="col-xs-10 col-xs-offset-1 text-white">
                    Are you a social connector and want to be part of the Drop Labels movement? Want to add your video and or know someone who would like to share their label(s) through a video? If so, create a video, log in, and upload the video. Once approved, it will be shared through our page and social networks.
                  </div> 
                </div>
              </div>

              <div class="col-sm-5">
              <img src="sites/all/themes/drop_labels_bootstrap/images/labels/droplabels-volunteers-03.png" class="box-like-background width--100">
               
                <div class="row founds-box text-white" style="top:-103px">
                  <div class="col-xs-10 col-xs-offset-1 text-white">
                    We need help with filming stories, and spreading the videos! When there is an event or a large gatheirng, we need people to help spread our cause by telling people about the project and get them to lend us their stories of having labels.
                  </div> 
                </div>  
              </div>

          </div>


      </div>
      <!-- End of the Boxes title -->  
      <?php require("requires/footer-front.php") ?>
      <!-- Start of footer  -->


      <!-- End of footer  -->

    </section>

    <?php if (!empty($page['sidebar_second'])): ?>
      <aside class="col-sm-3" role="complementary">
        <?php print render($page['sidebar_second']); ?>
      </aside>  <!-- /#sidebar-second -->
    <?php endif; ?>



  </div>
</div>

<?php require("requires/footer-terms.php") ?>

<div  class="container licensed" style="font-size: 8px">Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

