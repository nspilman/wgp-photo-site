const menucomponent = {
    template: `
    <div class="nav" style="background-color:rgb(255,255,255,.3)">
    <div class="theme-logo">
        <div class="theme-logo-content">
            <a href="index.html"><img src="images/wineguy_photos/wineguy_logo.png" style="max-height: 10vh; max-width: 40vw;" alt="images/wineguy_photos/wineguy_logo.png"></a>
        </div>
    </div>
    
    <div class="trigger-menu">
        <div class="shape">
            <div class="bar">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <i class="fa fa-arrow-right"></i>
        </div>
    </div>

    <div class="block-menu">
        <div class="menu-content">
            <ul class="menu">
                <li class="leaf"><a href="./" title="">Home</a></li>
                <li class="leaf"><a href="./#services" title="">Services</a></li>
                <li class="expanded">
                    <a href="./portfolio.html" title="">Portfolio</a>
                        <ul class="menu">
                            <li><a class = "portfolioMenuDropdown" href="./portfolio-weddings.html" title="">Wedding Photos</a></li>
                            <li><a class = "portfolioMenuDropdown" href="./portfolio-events.html" title="">Event Photos</a></li>
                            <li><a class = "portfolioMenuDropdown" href="./portfolio-family.html" title="">Family Photos</a></li>
                            <li><a class = "portfolioMenuDropdown" href="./portfolio-seniorphotos.html" title="">Senior Photos</a></li>
                        </ul>
                </li>	
                <li class="expanded">
                    <a href="./pricing.html" title="">Pricing</a>
                        <ul class="menu">
                            <li><a class = "portfolioMenuDropdown" href="./pricing-weddings.html" title="">Wedding Photos</a></li>
                            <li><a class = "portfolioMenuDropdown" href="./pricing-events.html" title="">Event Photos</a></li>
                            <li><a class = "portfolioMenuDropdown" href="./pricing-family.html" title="">Family Photos</a></li>
                            <li><a class = "portfolioMenuDropdown" href="./pricing-seniorphotos.html" title="">Senior Photos</a></li>
                        </ul>
                </li>									
                <li class="leaf"></li>
                <li class="leaf"><a href="./clientLove.html" title="">Client Love</a></li>
                <li class="leaf"><a href="./store.html" title="">Store</a></li>
                <li class="last leaf"><a href="./#contact" title="">Contact</a></li>
            </ul>
        </div>
    </div>
</div>
      `
  };
  