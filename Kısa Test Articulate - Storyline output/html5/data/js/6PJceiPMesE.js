window.globalProvideData('slide', '{"title":"Hotspot","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":1,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide1","width":720,"height":540,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFFFFFF","alpha":100,"stop":0}]}},"id":"6PJceiPMesE","variables":[{"kind":"variable","name":"hotspot_6hNvkpcZcQB_xpos","type":"number","value":-1,"resume":true},{"kind":"variable","name":"hotspot_6hNvkpcZcQB_ypos","type":"number","value":-1,"resume":true}],"actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"#hotspot_6hNvkpcZcQB_xpos","typea":"var","valueb":-1,"typeb":"number"}},"thenActions":[{"kind":"eval_interaction","id":"_this.5lWWRBHXwJz"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_5jpFgMDs5ju.InvalidPromptSlide"}}]},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.6Aog6mRqxUI.5jMRRmgKwPy"}}]},"ReviewInt_6hNvkpcZcQB":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5p7I027oZ7G"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5lWWRBHXwJz.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6hNvkpcZcQB_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6hNvkpcZcQB_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6hNvkpcZcQB","typea":"var","valueb":"5wIDLZ8QOEy","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000100101"},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"hotspot_6hNvkpcZcQB_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"hotspot_6hNvkpcZcQB_marker"},"xPos":{"type":"var","value":"#hotspot_6hNvkpcZcQB_xpos"},"yPos":{"type":"var","value":"#hotspot_6hNvkpcZcQB_ypos"},"xOffset":{"type":"number","value":-5},"yOffset":{"type":"number","value":-5}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5wIDLZ8QOEy.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6hNvkpcZcQB"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.5wIDLZ8QOEy.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_6hNvkpcZcQB"}]}]},{"kind":"set_review","objRef":{"type":"string","value":"hotspot_6hNvkpcZcQB"},"enabled":{"type":"boolean","value":true}}]},"ReviewIntCorrectIncorrect_6hNvkpcZcQB":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5p7I027oZ7G.$OnStage","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5p7I027oZ7G"}}]},{"kind":"set_enabled","objRef":{"type":"string","value":"5p7I027oZ7G"},"enabled":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"5p7I027oZ7G.ActGrpSetReviewState"},{"kind":"set_enabled","objRef":{"type":"string","value":"5p7I027oZ7G"},"enabled":{"type":"boolean","value":false}}]},"AnsweredInt_6hNvkpcZcQB":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_6hNvkpcZcQB"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000100101"}]}]},"DisableChoices_6hNvkpcZcQB":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5p7I027oZ7G"},"enabled":{"type":"boolean","value":false}}]},"6hNvkpcZcQB_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5lWWRBHXwJz.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.5wIDLZ8QOEy.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6hNvkpcZcQB"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5lWWRBHXwJz.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5lWWRBHXwJz.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_6hNvkpcZcQB"}]}]}]}]},"SetLayout_pxabnsnfns00000100101":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000100101"}]}]},"NavigationRestrictionNextSlide_6PJceiPMesE":{"kind":"actiongroup","actions":[]},"NavigationRestrictionPreviousSlide_6PJceiPMesE":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000100101"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000100101"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_5jpFgMDs5ju","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_5jpFgMDs5ju","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6hNvkpcZcQB","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_6hNvkpcZcQB"}],"elseActions":[{"kind":"exe_actiongroup","id":"6hNvkpcZcQB_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_6hNvkpcZcQB","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6hNvkpcZcQB","typea":"var","valueb":"5wIDLZ8QOEy","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5wIDLZ8QOEy"},"completed_slide_ref":{"type":"string","value":"_player.6Aog6mRqxUI.5jMRRmgKwPy"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_6hNvkpcZcQB","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_6hNvkpcZcQB","typea":"var","valueb":"5wIDLZ8QOEy","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.5wIDLZ8QOEy"},"completed_slide_ref":{"type":"string","value":"_player.6Aog6mRqxUI.5jMRRmgKwPy"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_6PJceiPMesE"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_6PJceiPMesE"}]}],"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":5000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6LPugDujSBB"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"hotspot_6hNvkpcZcQB"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6Xtm0LbuXBt"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5p7I027oZ7G"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":0,"yPos":0,"tabIndex":5,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":270,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":720,"bottom":540,"pngfb":false,"pr":{"l":"Lib","i":28}},"html5data":{"xPos":0,"yPos":0,"width":720,"height":540,"strokewidth":0}},"width":720,"height":540,"resume":true,"useHandCursor":true,"id":"hotspot_6hNvkpcZcQB","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6hNvkpcZcQB_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6hNvkpcZcQB_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"image","cliptobounds":false,"defaultAction":"","imagelib":[{"kind":"imagedata","assetId":4,"id":"01","url":"story_content/6kLoJb4rNuf_80_DX1320_DY1320.swf","type":"normal","altText":"Picture-Covid19map.png","width":1200,"height":586,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":32,"yPos":126,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":330,"rotateYPos":161.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":660,"bottom":323,"altText":"Picture-Covid19map.png","pngfb":false,"pr":{"l":"Lib","i":29}},"html5data":{"xPos":0,"yPos":0,"width":660,"height":323,"strokewidth":0}},"width":660,"height":323,"resume":true,"useHandCursor":true,"id":"6LPugDujSBB","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6hNvkpcZcQB_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6hNvkpcZcQB_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6Xtm0LbuXBt_-1893146949","id":"01","linkId":"txt__default_6Xtm0LbuXBt","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":500,"height":73,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Hangi şehir Covid-19’dan en çok etkilenen şehirdir?","style":{"fontSize":20,"fontFamily":"\\"Open Sans Charset0_v9TY33EDE6F2\\",\\"Open Sans\\"","ascent":28.503,"descent":7.813,"leading":0,"underlinePosition":-2.005,"underlineThickness":1.328,"xHeight":14.271}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":51,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":466,"bottom":78,"pngfb":false,"pr":{"l":"Lib","i":30}}}],"shapemaskId":"","xPos":112,"yPos":46,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":260,"rotateYPos":41.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":520,"bottom":83,"altText":"Hangi şehir Covid-19’dan en çok etkilenen şehirdir?","pngfb":false,"pr":{"l":"Lib","i":14}},"html5data":{"xPos":0,"yPos":0,"width":520,"height":83,"strokewidth":0}},"width":520,"height":83,"resume":true,"useHandCursor":true,"id":"6Xtm0LbuXBt","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6hNvkpcZcQB_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6hNvkpcZcQB_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","shapemaskId":"","xPos":116,"yPos":175,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":32,"rotateYPos":16,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":65,"bottom":34,"altText":"Oval Hotspot 1","pngfb":false,"pr":{"l":"Lib","i":31}},"html5data":{"xPos":0,"yPos":0,"width":65,"height":34,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Review","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":66,"bottom":35,"altText":"Oval Hotspot 1","pngfb":false,"pr":{"l":"Lib","i":32}},"html5data":{"xPos":-1,"yPos":-1,"width":67,"height":36,"strokewidth":2}}}],"width":65,"height":33,"resume":true,"useHandCursor":true,"id":"5p7I027oZ7G","events":[{"kind":"onrelease","actions":[{"kind":"get_mouse_position","xvar":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_xpos"},"yvar":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_ypos"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_marker"}},{"kind":"moveto","addoffsetx":true,"addoffsety":true,"objRef":{"type":"string","value":"_parent.hotspot_6hNvkpcZcQB_marker"},"xPos":{"type":"var","value":"_parent.#hotspot_6hNvkpcZcQB_xpos"},"yPos":{"type":"var","value":"_parent.#hotspot_6hNvkpcZcQB_ypos"},"xOffset":{"type":"number","value":0},"yOffset":{"type":"number","value":0}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-30,"yPos":-30,"tabIndex":4,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":5,"rotateYPos":5,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":0,"bottom":0,"pngfb":false,"pr":{"l":"Lib","i":33}},"html5data":{"xPos":0,"yPos":0,"width":0,"height":0,"strokewidth":0}},"width":10,"height":10,"resume":true,"useHandCursor":true,"id":"hotspot_6hNvkpcZcQB_marker"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6hNvkpcZcQB_CorrectReview","id":"01","linkId":"6hNvkpcZcQB_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":402,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":17}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":6,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":16}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6hNvkpcZcQB_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6hNvkpcZcQB_IncorrectReview","id":"01","linkId":"6hNvkpcZcQB_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":411,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":19}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":360,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":720,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":18}},"html5data":{"xPos":1,"yPos":1,"width":717,"height":37,"strokewidth":2}},"width":720,"height":40,"resume":false,"useHandCursor":true,"id":"6hNvkpcZcQB_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');