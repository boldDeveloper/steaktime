var _0x290b=['1\x201/2','1\x203/4','Rare','Medium\x20Rare','Medium','Medium\x20Well','Well\x20Done','donenessRadioRare','checked','donenessRadioMediumRare','donenessRadioMedium','donenessRadioMediumWell','thicknessRadio3/4','thicknessRadio1and1/2','cutRadioRibeye','cutRadioTenderloin','cutRadioPorterHouse','grillPanTypeRadio','grillGasTypeRadio','getElementById','firstSideGrillButton','style','display','none','addEventListener','block','innerText','Flip\x20Your\x20Steak!','40px','click','120px','inline','Your\x20Steak\x20is\x20Ready!','fontSize','Enjoy!','Thickness','3/4'];(function(_0x96ba30,_0x498279){var _0x39bee2=function(_0x4bab3a){while(--_0x4bab3a){_0x96ba30['push'](_0x96ba30['shift']());}};_0x39bee2(++_0x498279);}(_0x290b,0x1cf));var _0x209a=function(_0x41286f,_0x1ac899){_0x41286f=_0x41286f-0x0;var _0x7db6c4=_0x290b[_0x41286f];return _0x7db6c4;};let firstSideButton=document[_0x209a('0x0')](_0x209a('0x1')),secondSideButton=document['getElementById']('secondSideGrillButton'),restartSideButton=document[_0x209a('0x0')]('restartGrillButton'),timerMessage=document['getElementById']('timer');secondSideButton[_0x209a('0x2')]['display']='none';restartSideButton[_0x209a('0x2')][_0x209a('0x3')]=_0x209a('0x4');timerMessage[_0x209a('0x2')][_0x209a('0x3')]=_0x209a('0x4');let timeFirstSide=0x0;let timeSecondSide=0x0;firstSideButton[_0x209a('0x5')]('click',function(){firstSideGrillButton[_0x209a('0x2')][_0x209a('0x3')]=_0x209a('0x4');timerMessage[_0x209a('0x2')][_0x209a('0x3')]=_0x209a('0x6');determineCutFirstSide();determineFirstSideDonenessAndThickness();determineGrillTypeFirstSide();setTimeout(function(){secondSideButton[_0x209a('0x2')][_0x209a('0x3')]='inline';},0x7d0);var _0x4b1591=setInterval(_0x4510b1,0x3e8);function _0x4510b1(){if(timeFirstSide>0x0){timerMessage['innerText']=timeFirstSide;timeFirstSide--;}else if(timeFirstSide===-0x1){clearTimeout(_0x4b1591);}else{timerMessage[_0x209a('0x7')]=_0x209a('0x8');timerMessage['style']['fontSize']=_0x209a('0x9');clearTimeout(_0x4b1591);}}});secondSideButton[_0x209a('0x5')](_0x209a('0xa'),function(){timeFirstSide=-0x1;secondSideButton['style']['display']=_0x209a('0x4');determineCutSecondSide();determineSecondSideDonenessAndThickness();determineGrillTypeSecondSide();let _0x36a146=setInterval(_0xcf81cb,0x3e8);function _0xcf81cb(){if(timeSecondSide>0x0){timerMessage[_0x209a('0x7')]=timeSecondSide;timerMessage[_0x209a('0x2')]['fontSize']=_0x209a('0xb');timeSecondSide--;setTimeout(function(){restartSideButton[_0x209a('0x2')]['display']=_0x209a('0xc');},0x7d0);}else{timerMessage[_0x209a('0x7')]=_0x209a('0xd');timerMessage[_0x209a('0x2')][_0x209a('0xe')]=_0x209a('0x9');setTimeout(function(){timerMessage[_0x209a('0x7')]=_0x209a('0xf');},0xfa0);setTimeout(function(){timerMessage[_0x209a('0x2')][_0x209a('0x3')]=_0x209a('0x4');},0x1770);clearTimeout(_0x36a146);}}});restartGrillButton[_0x209a('0x5')]('click',function(){restartGrillButton[_0x209a('0x2')][_0x209a('0x3')]=_0x209a('0x4');firstSideGrillButton[_0x209a('0x2')][_0x209a('0x3')]=_0x209a('0xc');location['reload']();});let firstSideArray=[[_0x209a('0x10'),_0x209a('0x11'),'1',_0x209a('0x12'),_0x209a('0x13'),'2'],[_0x209a('0x14'),0xf0,0x12c,0x168,0x168,0x186],[_0x209a('0x15'),0xf0,0x10e,0x168,0x1a4,0x1c2],[_0x209a('0x16'),0x12c,0x168,0x1a4,0x1e0,0x1fe],[_0x209a('0x17'),0x168,0x1c2,0x1fe,0x21c,0x23a],[_0x209a('0x18'),0x1a4,0x21c,0x258,0x258,0x294]];let secondSideArray=[['Thickness','3/4','1',_0x209a('0x12'),_0x209a('0x13'),'2'],['Rare',0x78,0xb4,0xf0,0x12c,0x168],[_0x209a('0x15'),0xd2,0x10e,0x168,0x1a4,0x1a4],['Medium',0xf0,0xf0,0x168,0x1e0,0x1e0],[_0x209a('0x17'),0x12c,0x12c,0x1a4,0x21c,0x21c],[_0x209a('0x18'),0x168,0x168,0x1e0,0x258,0x294]];let x;let y;function determineX(){if(document[_0x209a('0x0')](_0x209a('0x19'))[_0x209a('0x1a')]){x=0x1;}else if(document[_0x209a('0x0')](_0x209a('0x1b'))['checked']){x=0x2;}else if(document[_0x209a('0x0')](_0x209a('0x1c'))[_0x209a('0x1a')]){x=0x3;}else if(document[_0x209a('0x0')](_0x209a('0x1d'))[_0x209a('0x1a')]){x=0x4;}else{x=0x5;}return x;}function determineY(){if(document[_0x209a('0x0')](_0x209a('0x1e'))[_0x209a('0x1a')]){y=0x1;}else if(document[_0x209a('0x0')]('thicknessRadio1')[_0x209a('0x1a')]){y=0x2;}else if(document['getElementById'](_0x209a('0x1f'))[_0x209a('0x1a')]){y=0x3;}else if(document[_0x209a('0x0')]('thicknessRadio1and3/4')[_0x209a('0x1a')]){y=0x4;}else{y=0x5;}return y;}function determineFirstSideDonenessAndThickness(){determineX();determineY();timeFirstSide+=firstSideArray[x][y];return timeFirstSide;}function determineSecondSideDonenessAndThickness(){determineX();determineY();timeSecondSide+=secondSideArray[x][y];return timeSecondSide;}function determineCutFirstSide(){if(document[_0x209a('0x0')]('cutRadioPorterHouse')[_0x209a('0x1a')]){timeFirstSide+=0x4b;}else if(document['getElementById'](_0x209a('0x20'))[_0x209a('0x1a')]||document[_0x209a('0x0')](_0x209a('0x21'))[_0x209a('0x1a')]){timeFirstSide-=0x5a;}else{timeFirstSide+=0x0;}return timeFirstSide;}function determineCutSecondSide(){if(document[_0x209a('0x0')](_0x209a('0x22'))[_0x209a('0x1a')]){timeSecondSide+=0x32;}else if(document[_0x209a('0x0')]('cutRadioRibeye')[_0x209a('0x1a')]||document[_0x209a('0x0')](_0x209a('0x21'))['checked']){timeSecondSide-=0x3c;}else{timeSecondSide+=0x0;}return timeSecondSide;}function determineGrillTypeFirstSide(){if(document[_0x209a('0x0')]('grillGasTypeRadio')['checked']){timeFirstSide+=0x2d;}else if(document['getElementById'](_0x209a('0x23'))[_0x209a('0x1a')]){timeFirstSide+=0x96;}else{timeFirstSide+=0x0;}return timeFirstSide;}function determineGrillTypeSecondSide(){if(document[_0x209a('0x0')](_0x209a('0x24'))[_0x209a('0x1a')]){timeSecondSide+=0x1e;}else if(document[_0x209a('0x0')](_0x209a('0x23'))[_0x209a('0x1a')]){timeSecondSide+=0x78;}else{timeSecondSide+=0x0;}return timeSecondSide;}