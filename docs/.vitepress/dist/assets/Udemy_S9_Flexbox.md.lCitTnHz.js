import{_ as e,c as a,o as s,a2 as t}from"./chunks/framework.Butr-cWb.js";const i="/webdev.notes/assets/image.ljMgpaAw.png",n="/webdev.notes/assets/image-1.DTnipTr0.png",o="/webdev.notes/assets/image-2.CkpJECDw.png",l="/webdev.notes/assets/image-3.CIXdZpcg.png",r="/webdev.notes/assets/image-4.Dc-7usc4.png",p="/webdev.notes/assets/image-5.DiatesPi.png",c="/webdev.notes/assets/image-6.CGVvbNTI.png",d="/webdev.notes/assets/image-6.CGVvbNTI.png",k=JSON.parse('{"title":"Section 9 : Flexbox","description":"","frontmatter":{},"headers":[],"relativePath":"Udemy/S9_Flexbox.md","filePath":"Udemy/S9_Flexbox.md"}'),h={name:"Udemy/S9_Flexbox.md"},g=t(`<p>Here is the converted content with all image tags transformed into markdown images:</p><h1 id="section-9-flexbox" tabindex="-1">Section 9 : Flexbox <a class="header-anchor" href="#section-9-flexbox" aria-label="Permalink to &quot;Section 9 : Flexbox&quot;">​</a></h1><h2 id="this-website-is-amazing-to-understand-flexbox-and-its-nuances" tabindex="-1"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/" target="_blank" rel="noreferrer">This website</a> is amazing to understand flexbox and its nuances <a class="header-anchor" href="#this-website-is-amazing-to-understand-flexbox-and-its-nuances" aria-label="Permalink to &quot;[This website](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) is amazing to understand flexbox and its nuances&quot;">​</a></h2><h2 id="_54-display-flex" tabindex="-1">54. Display: Flex <a class="header-anchor" href="#_54-display-flex" aria-label="Permalink to &quot;54. Display: Flex&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>  display: flex;</span></span></code></pre></div><ul><li>applied on container</li><li>Nullifies all default display property and nullifies inline,</li></ul><hr><h2 id="_55-flex-direction-flex-basis-and-universal-selectors" tabindex="-1">55. Flex Direction (+flex basis and universal selectors) <a class="header-anchor" href="#_55-flex-direction-flex-basis-and-universal-selectors" aria-label="Permalink to &quot;55. Flex Direction (+flex basis and universal selectors)&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>flex-direction: row ;</span></span></code></pre></div><ul><li>The items goes from left to right</li><li>set by default</li></ul><hr><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.container{</span></span>
<span class="line"><span>  flex-direction: coloumn ;</span></span>
<span class="line"><span>}</span></span></code></pre></div><ul><li>The items goes from top to bottom</li></ul><hr><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>.container{</span></span>
<span class="line"><span>    flex-direction: coloumn ;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>.container &gt; * {</span></span>
<span class="line"><span>    flex-basis:100 px ;</span></span>
<span class="line"><span>}</span></span></code></pre></div><p><img src="https://github.com/vinitkesh/webdev.notes/assets/139075087/2f33536e-1450-40c6-85de-ad4285feed82" alt="image"></p><ul><li>gives <strong>height</strong> of container as 100px (flexing along vertical axis)</li></ul><hr><ul><li>if direction was not changed, it would define the <strong>width</strong> of the element:(flexing along horizontal axis)</li></ul><p><img src="https://github.com/vinitkesh/webdev.notes/assets/139075087/ae9dbe85-a270-4f12-8f80-ad82c979c576" alt="image"></p><h2 id="_56-flex-layout" tabindex="-1">56. Flex Layout <a class="header-anchor" href="#_56-flex-layout" aria-label="Permalink to &quot;56. Flex Layout&quot;">​</a></h2><p>Properties applied to a flex box.</p><p><strong>Child properties:</strong></p><h3 id="_1-order-int" tabindex="-1">1. order: &lt; int &gt; <a class="header-anchor" href="#_1-order-int" aria-label="Permalink to &quot;1. order: &lt; int &gt;&quot;">​</a></h3><p><code>order:0;</code> (by default)</p><p><code>order:num;</code> - order of the elements can be predefined</p><ul><li>for example we want a paricular set of elements to always come last... we&#39;ll give them order 2,3 and 4 and those 3 will always come after other added elements(which have default order 0)</li></ul><hr><h3 id="_2-i-m-not-writing-anyymore-notes-on-flexbox-just-read-the-website-thatis-given-at-top" tabindex="-1">2. I&#39;m not writing anyymore notes on flexbox... just read the website thatis given at top. <a class="header-anchor" href="#_2-i-m-not-writing-anyymore-notes-on-flexbox-just-read-the-website-thatis-given-at-top" aria-label="Permalink to &quot;2. I&#39;m not writing anyymore notes  on flexbox... just read the website thatis given at top.&quot;">​</a></h3><h2 id="flex-sizing" tabindex="-1">Flex Sizing <a class="header-anchor" href="#flex-sizing" aria-label="Permalink to &quot;Flex Sizing&quot;">​</a></h2><hr><h2 id="project-pricing-table" tabindex="-1">[Project] Pricing table <a class="header-anchor" href="#project-pricing-table" aria-label="Permalink to &quot;[Project] Pricing table&quot;">​</a></h2><h1 id="revision" tabindex="-1">Revision: <a class="header-anchor" href="#revision" aria-label="Permalink to &quot;Revision:&quot;">​</a></h1><p><img src="`+i+'" alt="Basics"></p><p><img src="'+n+'" alt="image"></p><p><img src="'+o+'" alt="image"></p><p><img src="'+l+'" alt="image"></p><p><img src="'+r+'" alt="image"></p><p><img src="'+p+'" alt="image"></p><p><img src="'+c+'" alt="image"></p><p><img src="'+d+'" alt="image"></p>',41),m=[g];function b(u,x,f,_,v,w){return s(),a("div",null,m)}const q=e(h,[["render",b]]);export{k as __pageData,q as default};
