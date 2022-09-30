import{_ as e,c as a,a as s,b as t,d,e as o,r as n,o as l}from"./404.md.ce3b5fb6.js";const q='{"title":"Block Shapes","description":"","frontmatter":{"title":"Block Shapes","category":"Documentation"},"headers":[{"level":2,"title":"Application","slug":"application"},{"level":2,"title":"List of known Blockshapes","slug":"list-of-known-blockshapes"}],"relativePath":"blocks/block-shapes.md"}',c={},i=t("div",{class:"warning custom-block"},[t("p",{class:"custom-block-title"},"Deprecated"),t("p",null,"Block Shapes are no longer officially supported and cannot be used with custom blocks, however they can still be used with vanilla ones.")],-1),p=t("p",null,"Blockshapes are essentially block geometries or models that are hard-coded into vanilla, meaning that they exist without having accessible files.",-1),u=t("h2",{id:"application",tabindex:"-1"},[d("Application "),t("a",{class:"header-anchor",href:"#application","aria-hidden":"true"},"#")],-1),_=t("p",null,[d("They are added in the resource pack's file, "),t("code",null,"blocks.json"),d(", using child "),t("code",null,'"blockshape"'),d(" in a block's object. This would look something like this:")],-1),b=o(`<div class="language-json line-numbers-mode"><pre><code>
    <span class="token property">&quot;wiki:invisible_aluminium_ore&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;blockshape&quot;</span><span class="token operator">:</span> <span class="token string">&quot;invisible&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sound&quot;</span><span class="token operator">:</span> <span class="token string">&quot;stone&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;textures&quot;</span><span class="token operator">:</span> <span class="token string">&quot;invisible_aluminium_ore&quot;</span>
    <span class="token punctuation">}</span>

</code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="list-of-known-blockshapes" tabindex="-1">List of known Blockshapes <a class="header-anchor" href="#list-of-known-blockshapes" aria-hidden="true">#</a></h2><table><thead><tr><th>ID</th><th>Block Shape</th></tr></thead><tbody><tr><td>-1</td><td>invisible</td></tr><tr><td>0</td><td>block</td></tr><tr><td>1</td><td>cross_texture</td></tr><tr><td>2</td><td>torch</td></tr><tr><td>3</td><td>fire</td></tr><tr><td>4</td><td>water</td></tr><tr><td>5</td><td>red_dust</td></tr><tr><td>6</td><td>rows</td></tr><tr><td>7</td><td>door</td></tr><tr><td>8</td><td>ladder</td></tr><tr><td>9</td><td>rail</td></tr><tr><td>10</td><td>stairs</td></tr><tr><td>11</td><td>fence</td></tr><tr><td>12</td><td>lever</td></tr><tr><td>13</td><td>cactus</td></tr><tr><td>14</td><td>bed</td></tr><tr><td>15</td><td>diode</td></tr><tr><td>18</td><td>iron_fence</td></tr><tr><td>19</td><td>stem</td></tr><tr><td>20</td><td>vine</td></tr><tr><td>21</td><td>fence_gate</td></tr><tr><td>22</td><td>chest</td></tr><tr><td>23</td><td>lilypad</td></tr><tr><td>25</td><td>brewing_stand</td></tr><tr><td>26</td><td>portal_frame</td></tr><tr><td>28</td><td>cocoa</td></tr><tr><td>31</td><td>tree</td></tr><tr><td>32</td><td>cobblestone_wall</td></tr><tr><td>40</td><td>double_plant</td></tr><tr><td>42</td><td>flower_pot</td></tr><tr><td>43</td><td>anvil</td></tr><tr><td>44</td><td>dragon_egg</td></tr><tr><td>48</td><td>structure_void</td></tr><tr><td>67</td><td>block_half</td></tr><tr><td>68</td><td>top_snow</td></tr><tr><td>69</td><td>tripwire</td></tr><tr><td>70</td><td>tripwire_hook</td></tr><tr><td>71</td><td>cauldron</td></tr><tr><td>72</td><td>repeater</td></tr><tr><td>73</td><td>comparator</td></tr><tr><td>74</td><td>hopper</td></tr><tr><td>75</td><td>slime_block</td></tr><tr><td>76</td><td>piston</td></tr><tr><td>77</td><td>beacon</td></tr><tr><td>78</td><td>chorus_plant</td></tr><tr><td>79</td><td>chorus_flower</td></tr><tr><td>80</td><td>end_portal</td></tr><tr><td>81</td><td>end_rod</td></tr><tr><td>83</td><td>skull</td></tr><tr><td>84</td><td>facing_block</td></tr><tr><td>85</td><td>command_block</td></tr><tr><td>86</td><td>terracotta</td></tr><tr><td>87</td><td>double_side_fence</td></tr><tr><td>88</td><td>frame</td></tr><tr><td>89</td><td>shulker_box</td></tr><tr><td>90</td><td>doublesided_cross_texture</td></tr><tr><td>91</td><td>doublesided_double_plant</td></tr><tr><td>92</td><td>doublesided_rows</td></tr><tr><td>93</td><td>element_block</td></tr><tr><td>94</td><td>chemistry_table</td></tr><tr><td>96</td><td>coral_fan</td></tr><tr><td>97</td><td>seagrass</td></tr><tr><td>98</td><td>kelp</td></tr><tr><td>99</td><td>trapdoor</td></tr><tr><td>100</td><td>sea_pickle</td></tr><tr><td>101</td><td>conduit</td></tr><tr><td>102</td><td>turtle_egg</td></tr><tr><td>105</td><td>bubble_column</td></tr><tr><td>106</td><td>barrier</td></tr><tr><td>107</td><td>sign</td></tr><tr><td>108</td><td>bamboo</td></tr><tr><td>109</td><td>bamboo_sapling</td></tr><tr><td>110</td><td>scaffolding</td></tr><tr><td>111</td><td>grindstone</td></tr><tr><td>112</td><td>bell</td></tr><tr><td>113</td><td>lantern</td></tr><tr><td>114</td><td>campfire</td></tr><tr><td>115</td><td>lectern</td></tr><tr><td>116</td><td>sweet_berry_bush</td></tr><tr><td>117</td><td>cartography_table</td></tr><tr><td>119</td><td>stonecutter_block</td></tr><tr><td>123</td><td>chain</td></tr><tr><td>126</td><td>sculk_sensor</td></tr><tr><td>133</td><td>azalea</td></tr><tr><td>133</td><td>flowering_azalea</td></tr><tr><td>134</td><td>glow_frame</td></tr><tr><td>135</td><td>glow_lichen</td></tr></tbody></table><p><a href="https://gist.github.com/toka7290/3bef704d2f57c775bb9ac84443a6df1c" target="_blank" rel="noopener noreferrer"> Original Credit </a></p>`,4);function h(k,m,f,g,w,v){const r=n("CodeHeader");return l(),a("div",null,[i,p,u,_,s(r),b])}var x=e(c,[["render",h]]);export{q as __pageData,x as default};
