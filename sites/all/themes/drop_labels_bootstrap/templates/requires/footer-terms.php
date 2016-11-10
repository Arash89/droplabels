<?php if (!empty($page['footer'])): ?>
  <?php $page['footer']['#markup'] = '<p class="copy"><a href="/terms">Terms of Service</a> – © 2016 DROP LABELS</p>';?>
  <footer class="footer <?php print $container_class; ?>">
    <?php print render($page['footer']); ?>
  </footer>
<?php endif; ?>