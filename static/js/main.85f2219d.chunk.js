(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{228:function(e,a,t){e.exports=t(419)},233:function(e,a,t){},234:function(e,a,t){},243:function(e,a,t){},298:function(e,a,t){},419:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(7),l=t.n(r),c=t(27),i=t(23),m=t(29),s=t(28),u=t(19),d=t(30),h=(t(233),t(234),t(201)),p=t(41),f=t(58),b=t.n(f),g=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).state={value:!1},t.handleCLick=t.handleCLick.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"handleCLick",value:function(e){var a=this;this.setState({value:!0},function(){return setTimeout(function(){return a.setState({value:!1})},2500)}),console.log("clicked")}},{key:"render",value:function(){var e=this.state.value,a=this.props,t=a.color,n=a.name,r=a.paletteId,l=a.id,c=a.moreUrl,i=b()(t).luminance()<=.08,m=b()(t).luminance()>=.08;return console.log(n),o.a.createElement(h.CopyToClipboard,{text:t},o.a.createElement("div",{className:"ColorBox",style:{backgroundColor:"".concat(t)}},o.a.createElement("button",{className:"btn-cpy",onClick:this.handleCLick},"Copy"),o.a.createElement("div",{className:"color-title ".concat(i&&"light-title")},n),c&&o.a.createElement(p.b,{to:"/palette/".concat(r,"/").concat(l),onClick:function(e){return e.stopPropagation()}},o.a.createElement("div",{className:"seemore ".concat(m&&"dark-title")},"More")),o.a.createElement("div",{style:{backgroundColor:"".concat(t)},className:"overlay ".concat(!0===e?" expand":"")},o.a.createElement("h1",null,"Copied"),o.a.createElement("p",null,this.props.color))))}}]),a}(n.Component),v=t(473),C=(t(242),t(243),t(471)),E=t(478),F=t(475),y=t(209),j=t.n(y),O=t(220),k=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).state={value:"hex",open:!1},t.changeFormatHandler=t.changeFormatHandler.bind(Object(u.a)(t)),t.handleSnakbarClose=t.handleSnakbarClose.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"changeFormatHandler",value:function(e){this.setState({value:e.target.value}),this.props.changeFormat(e.target.value),this.setState({open:!0})}},{key:"handleSnakbarClose",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,n=e.showAllColors,r=this.state,l=r.value,c=r.open;return o.a.createElement("div",{className:"Navbar"},o.a.createElement(p.b,{className:"Logo",to:"/"},o.a.createElement("div",null,"reactcolorpicker")),n&&o.a.createElement("div",{className:"slider-container"},o.a.createElement("div",null," Level : ",a),o.a.createElement("div",{className:"slider"},o.a.createElement(O.a,{onAfterChange:t,step:100,max:900,min:100,defaultValue:a}))),o.a.createElement(C.a,{className:"select-item",onChange:this.changeFormatHandler,value:l},o.a.createElement(E.a,{value:"hex"},"Hex - #FFFFFF"),o.a.createElement(E.a,{value:"rgb"},"Rgb - RGB(255,255,255)"),o.a.createElement(E.a,{value:"rgba"},"Rgba - RGBA(255,255,255,1.0)")),o.a.createElement(F.a,{open:c,autoHideDuration:6e3,onClose:this.handleSnakbarClose,message:"Changed to: ".concat(l.toUpperCase()),action:[o.a.createElement(j.a,{onClick:this.handleSnakbarClose})]}))}}]),a}(n.Component);function S(e){var a=e.paletteName,t=e.emoji;return o.a.createElement("div",{className:"Palette-footer"},a," : ",t)}var N=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).state={level:500,format:"hex"},t.changeLevel=t.changeLevel.bind(Object(u.a)(t)),t.changeFormat=t.changeFormat.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.paletteName,t=e.colors,n=e.emoji,r=e.id,l=this.state,c=l.level,i=l.format,m=t[c].map(function(e){return o.a.createElement(g,{key:Object(v.a)(),paletteId:r,color:e[i],name:e.name,id:e.id,moreUrl:!0})});return o.a.createElement("div",{className:"Palette"},o.a.createElement(k,{showAllColors:!0,level:c,changeLevel:this.changeLevel,changeFormat:this.changeFormat}),o.a.createElement("div",{className:"Palette-box"}," ",m," "),o.a.createElement(S,{paletteName:a,emoji:n}))}}]),a}(n.Component),w=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"Turquoise",color:"#1abc9c"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],B=[50,100,200,300,400,500,600,700,800,900];var P=function(e){for(var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=0,n=B;t<n.length;t++){var o=n[t];a.colors[o]=[]}var r,l,c=!0,i=!1,m=void 0;try{for(var s,u=e.colors[Symbol.iterator]();!(c=(s=u.next()).done);c=!0){var d=s.value,h=(r=d.color,l=10,b.a.scale(function(e){return[b()(e).darken(1.4).hex(),e,"#fff"]}(r)).mode("lab").colors(l)).reverse();for(var p in h)a.colors[B[p]].push({name:"".concat(d.name," ").concat(B[p]),id:d.name.toLowerCase().replace(/ /g,"-"),hex:h[p],rgb:b()(h[p]).css(),rgba:b()(h[p]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(f){i=!0,m=f}finally{try{c||null==u.return||u.return()}finally{if(i)throw m}}return a},x=t(57);function A(e){var a=e.colors,t=e.emoji,n=e.paletteName,r=a.map(function(e){return o.a.createElement("div",{className:"MiniColor",style:{background:"".concat(e.color)}})});return o.a.createElement("div",{className:"MiniPalette",onClick:e.handleClick},o.a.createElement("div",{className:"MiniColors"},r),o.a.createElement("div",{className:"MiniPaletteBar"},o.a.createElement("span",null,n),o.a.createElement("span",null,t)))}t(298);var D=function(e){function a(){return Object(c.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"handleClick",value:function(e){this.props.history.push("palette/".concat(e))}},{key:"render",value:function(){var e=this,a=this.props.palettes.map(function(a){return o.a.createElement(A,Object.assign({handleClick:function(){return e.handleClick(a.id)}},a))});return o.a.createElement("div",{className:"Palettelist"},o.a.createElement("div",{className:"PaletteContainer"},o.a.createElement("div",{className:"Palettelistnav"},o.a.createElement("h3",null,"React Colors"),o.a.createElement(p.b,{to:"/palette/new"},o.a.createElement("span",null,"Create a palette"))),o.a.createElement("div",{className:"PalettesBox"},a)))}}]),a}(n.Component),L=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).state={format:"hex"},t._shades=t.gatherShades(t.props.palette,t.props.colorId),t.changeFormat=t.changeFormat.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"gatherShades",value:function(e,a){var t=[],n=e.colors;for(var o in n)t=t.concat(n[o].filter(function(e){return e.id===a}));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,a=this.props.palette,t=a.paletteName,n=a.emoji,r=a.id,l=this._shades.map(function(a){return o.a.createElement(g,{key:Object(v.a)(),paletteId:r,color:a[e],name:a.name,id:a.id,moreUrl:!1})});return o.a.createElement("div",{className:"Palette SingleColorPalette"},o.a.createElement(k,{showAllColors:!1,changeFormat:this.changeFormat}),o.a.createElement("div",{className:"Palette-box"},l,o.a.createElement("div",{className:"ColorBox go-back"},o.a.createElement(p.b,{to:"/palette/".concat(r),className:"btn-goback"},"Go Back"))),o.a.createElement(S,{paletteName:t,emoji:n}))}}]),a}(n.Component),G=t(47),I=t(109),M=t(80),R=t(476),H=t(6),U=t(477),T=t(215),q=t.n(T),V=t(466),z=t(465),W=function(e){return"@media(max-width: ".concat({xs:"576px",sm:"768px",md:"992px",lg:"1200px",xl:"1600px"}[e],")")},J=function(e){return{root:{display:"flex"},drawer:Object(G.a)({width:"400px",flexShrink:0},W("xs"),{width:"100%"}),drawerPaper:Object(G.a)({width:"400px",display:"flex",alignItems:"center"},W("xs"),{width:"100%"}),drawerHeader:Object(M.a)({display:"flex",alignItems:"center",width:"100%",padding:"0 8px"},e.mixins.toolbar,{justifyContent:"flex-end"}),drawerTitle:{fontSize:"2rem"},content:Object(G.a)({height:"calc(100vh - 64px)",flexGrow:1,padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:"-400px"},W("xs"),{marginLeft:"-100%"}),contentShift:Object(G.a)({transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},W("xs"),{overflow:"hidden"}),container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%",display:"flex",justifyContent:"space-around"},button:{}}},Y=t(25),K=t.n(Y),_=(t(299),t(474)),Q=t(464),X=t(468),Z=t(467),$=t(216),ee=t.n($),ae=t(217),te=t.n(ae),ne=t(469),oe=t(219),re=t(218),le=t.n(re),ce=t(422);var ie=Object(ce.a)({root:{display:"inline-block",position:"relative",width:"20%",height:"25%"}})(function(e){var a=e.color,t=e.classes;return o.a.createElement("div",{className:t.root,style:{backgroundColor:a.color}},a.name)}),me=t(88),se=Object(R.a)("main",{shouldForwardProp:function(e){return"open"!==e}})(function(e){var a=e.theme,t=e.open;return Object(M.a)({flexGrow:1,height:"calc(100vh-64px)",padding:a.spacing(3),transition:a.transitions.create("margin",{easing:a.transitions.easing.sharp,duration:a.transitions.duration.leavingScreen}),marginLeft:-400},t&&{transition:a.transitions.create("margin",{easing:a.transitions.easing.easeOut,duration:a.transitions.duration.enteringScreen}),marginLeft:0})}),ue=Object(R.a)(z.a,{shouldForwardProp:function(e){return"open"!==e}})(function(e){var a=e.theme,t=e.open;return Object(M.a)({transition:a.transitions.create(["margin","width"],{easing:a.transitions.easing.sharp,duration:a.transitions.duration.leavingScreen})},t&&{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:a.transitions.create(["margin","width"],{easing:a.transitions.easing.easeOut,duration:a.transitions.duration.enteringScreen})})}),de=(Object(R.a)("div")(function(e){var a=e.theme;return Object(M.a)({display:"flex",alignItems:"center",padding:a.spacing(0,1)},a.mixins.toolbar,{justifyContent:"flex-end"})}),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t.state={open:!1,currentColor:"",newName:"",colors:[{color:"blue",name:"blue"}]},t.hanndleColorSave=t.hanndleColorSave.bind(Object(u.a)(t)),t.updateCurrentColor=t.updateCurrentColor.bind(Object(u.a)(t)),t.onChangeNewName=t.onChangeNewName.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;me.ValidatorForm.addValidationRule("isNameUnique",function(a){return e.state.colors.every(function(e){return e.name.toLowerCase()!==a.toLowerCase()})}),me.ValidatorForm.addValidationRule("isColorUnique",function(a){return e.state.colors.every(function(a){return a.color!==e.state.currentColor})})}},{key:"hanndleColorSave",value:function(){console.log(this.state.newName,this.state.currentColor);var e={name:this.state.newName,color:this.state.currentColor};this.setState({colors:[].concat(Object(I.a)(this.state.colors),[e])})}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"onChangeNewName",value:function(e){this.setState({newName:e.target.value})}},{key:"render",value:function(){var e=this,a=this.props,t=a.classes,n=a.theme,r=this.state,l=r.open,c=r.currentColor,i=r.colors,m=r.newName;return o.a.createElement("div",{className:t.root},o.a.createElement(U.a,null),o.a.createElement(ue,{position:"fixed",open:l,className:K()(t.appBar,Object(G.a)({},t.appBarShift,l))},o.a.createElement(V.a,{disableGutters:!l},o.a.createElement(Z.a,{color:"inherit","aria-label":"open drawer",onClick:this.handleDrawerOpen,edge:"start",className:K()(t.menuButton,l&&t.hide)},o.a.createElement(q.a,null)),o.a.createElement(Q.a,{variant:"h6",noWrap:!0,component:"div"},"Persistent drawer"))),o.a.createElement(_.a,{variant:"persistent",anchor:"left",open:l,classes:{paper:t.drawerPaper}},o.a.createElement("div",{className:t.drawerHeader},o.a.createElement(Z.a,{onClick:this.handleDrawerClose},"ltr"===n.direction?o.a.createElement(ee.a,null):o.a.createElement(te.a,null))),o.a.createElement(X.a,null),o.a.createElement("h1",null,"Design Your Palette"),o.a.createElement("div",null,o.a.createElement(ne.a,{variant:"contained",color:"secondary"},"Clear Palette"),o.a.createElement(ne.a,{variant:"contained",color:"primary"},"Random Color")),o.a.createElement(oe.a,{onChangeComplete:function(a){return e.updateCurrentColor(a)},color:c}),o.a.createElement(me.ValidatorForm,{onSubmit:this.hanndleColorSave,ref:"form"},o.a.createElement(me.TextValidator,{onChange:this.onChangeNewName,value:m,validators:["required","isUniqueName","isUniqueColor"],errorMessages:["The field is required","The name already exists","Select a new color"]}),o.a.createElement(ne.a,{color:"primary",style:{backgroundColor:"".concat(c)},type:"submit",variant:"contained"},"Add Color"))),o.a.createElement(se,{open:l,className:K()(t.content,Object(G.a)({},t.contentShift,l)),style:{marginLeft:400}},o.a.createElement("div",{className:t.drawerHeader}),i.map(function(e){return o.a.createElement(ie,{key:le()(),color:e})})))}}]),a}(n.Component)),he=Object(H.a)(J,{withTheme:!0})(de),pe=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).state={},t.findPalette=t.findPalette.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"findPalette",value:function(e){return w.find(function(a){return a.id===e})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(x.c,null,o.a.createElement(x.a,{exact:!0,path:"/",render:function(e){return o.a.createElement(D,Object.assign({palettes:w},e))}}),o.a.createElement(x.a,{exact:!0,path:"/palette/new",render:function(){return o.a.createElement(he,null)}}),o.a.createElement(x.a,{exact:!0,path:"/palette/:id",render:function(a){return o.a.createElement(N,{palette:P(e.findPalette(a.match.params.id))})}}),o.a.createElement(x.a,{path:"/palette/:paletteId/:colorId",render:function(a){return o.a.createElement(L,{colorId:a.match.params.colorId,palette:P(e.findPalette(a.match.params.paletteId))})}})))}}]),a}(n.Component),fe=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,479)).then(function(a){var t=a.getCLS,n=a.getFID,o=a.getFCP,r=a.getLCP,l=a.getTTFB;t(e),n(e),o(e),r(e),l(e)})};l.a.render(o.a.createElement(p.a,null,o.a.createElement(pe,null)),document.getElementById("root")),fe()}},[[228,1,2]]]);
//# sourceMappingURL=main.85f2219d.chunk.js.map