(function(){this['システム']['使う']("MBit");this['ラベル']['作る']("ステータス");this['ステータス']=this['フィールド']['作る']();this['ラベル']['作る']("加速度X")['次の行']();this['加速度X']=this['フィールド']['作る']();this['加速度X']['ボタン']=this['ボタン']['作る']("ON");this['ラベル']['作る']("加速度Y")['次の行']();this['加速度Y']=this['フィールド']['作る']();this['加速度Y']['ボタン']=this['ボタン']['作る']("OFF");this['ラベル']['作る']("加速度Z")['次の行']();this['加速度Z']=this['フィールド']['作る']();this['加速度Z']['ボタン']=this['ボタン']['作る']("OFF");this['ラベル']['作る']("Aボタン")['次の行']();this['Aボタン']=this['フィールド']['作る']();this['Aボタン']['ボタン']=this['ボタン']['作る']("OFF");this['ラベル']['作る']("Bボタン")['次の行']();this['Bボタン']=this['フィールド']['作る']();this['Bボタン']['ボタン']=this['ボタン']['作る']("OFF");this['ラベル']['作る']("温度 　")['次の行']();this['温度']=this['フィールド']['作る']();this['温度']['ボタン']=this['ボタン']['作る']("OFF");this['ラベル']['作る']("磁力X　")['次の行']();this['磁力X']=this['フィールド']['作る']();this['磁力X']['ボタン']=this['ボタン']['作る']("OFF");this['ラベル']['作る']("磁力Y　")['次の行']();this['磁力Y']=this['フィールド']['作る']();this['磁力Y']['ボタン']=this['ボタン']['作る']("OFF");this['ラベル']['作る']("磁力Z　")['次の行']();this['磁力Z']=this['フィールド']['作る']();this['磁力Z']['ボタン']=this['ボタン']['作る']("OFF");this['ラベル']['作る']("方位 　")['次の行']();this['方位']=this['フィールド']['作る']();this['方位']['ボタン']=this['ボタン']['作る']("OFF");this['ラベル']['作る']("ピン0　")['次の行']();this['ピン0']=this['フィールド']['作る']();this['ピン0']['ボタン']=this['ボタン']['作る']("OFF");this['ラベル']['作る']("ピン1　")['次の行']();this['ピン1']=this['フィールド']['作る']();this['ピン1']['ボタン']=this['ボタン']['作る']("OFF");this['ラベル']['作る']("ピン2　")['次の行']();this['ピン2']=this['フィールド']['作る']();this['ピン2']['ボタン']=this['ボタン']['作る']("OFF");this['LED表示']=this['ボタン']['作る']("LED表示")['次の行']();this['LED表示']['動作']=dtlbind(this,function(){var self=this;var 自分=self;return this['MBit']['LED表示']("*****","****-","***-*","-*-**","*-***");});this['ラベル']['作る']("LED文字")['次の行']();this['LED文字']=this['フィールド']['作る']("test");this['LED文字']['動作']=dtlbind(this,function(t){var self=this;var 自分=self;return this['MBit']['LED文字']((t));});this['X']=(0);this['加速度X']['かめた']=this['タートル']['作る']()['線の太さ']((1))['線の色']((this['緑']));this['加速度Y']['かめた']=this['タートル']['作る']()['線の太さ']((1))['線の色']((this['赤']))['変身する']("ayumiRed.png")['ペンなし']()['消える']();this['加速度Z']['かめた']=this['タートル']['作る']()['線の太さ']((1))['線の色']((this['青']))['変身する']("ayumiBlue.png")['ペンなし']()['消える']();this['Aボタン']['かめた']=this['タートル']['作る']()['線の太さ']((1))['線の色']((this['緑']))['ペンなし']()['消える']();this['Bボタン']['かめた']=this['タートル']['作る']()['線の太さ']((1))['線の色']((this['赤']))['変身する']("ayumiRed.png")['ペンなし']()['消える']();this['温度']['かめた']=this['タートル']['作る']()['線の太さ']((1))['線の色']((this['黒']))['変身する']("ayumiYellow.png")['ペンなし']()['消える']();this['磁力X']['かめた']=this['タートル']['作る']()['線の太さ']((1))['線の色']((this['緑']))['ペンなし']()['消える']();this['磁力Y']['かめた']=this['タートル']['作る']()['線の太さ']((1))['線の色']((this['赤']))['変身する']("ayumiRed.png")['ペンなし']()['消える']();this['磁力Z']['かめた']=this['タートル']['作る']()['線の太さ']((1))['線の色']((this['青']))['変身する']("ayumiBlue.png")['ペンなし']()['消える']();this['方位']['かめた']=this['タートル']['作る']()['線の太さ']((1))['線の色']((this['黒']))['変身する']("ayumiYellow.png")['ペンなし']()['消える']();this['ピン0']['かめた']=this['タートル']['作る']()['線の太さ']((1))['線の色']((this['緑']))['ペンなし']()['消える']();this['ピン1']['かめた']=this['タートル']['作る']()['線の太さ']((1))['線の色']((this['赤']))['変身する']("ayumiRed.png")['ペンなし']()['消える']();this['ピン2']['かめた']=this['タートル']['作る']()['線の太さ']((1))['線の色']((this['青']))['変身する']("ayumiBlue.png")['ペンなし']()['消える']();this['タートル']['作る']()['位置']((0),(250))['位置']((0),-(250))['位置']((0),(0))['位置']((300),(0))['位置']((300),(250))['位置']((300),-(250))['消える']();this['方位']['かめたM']=this['タートル']['作る']()['ペンなし']()['位置'](-(40),-(10))['左回り']((90))['消える']();this['加速度X']['ボタン']['動作']=dtlbind(this,function(){var self=this;var 自分=self;var t;t=this['読む']();dtlbind(this,function(){var self=this;var 自分=self;return (t==="ON");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("OFF");(this['加速度X']['かめた']['図形を作る']())['消える']();return this['加速度X']['かめた']['消える']()['ペンなし']();}));return dtlbind(this,function(){var self=this;var 自分=self;return (t==="OFF");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("ON");return this['加速度X']['かめた']['現れる']()['ペンあり']();}));});this['加速度Y']['ボタン']['動作']=dtlbind(this,function(){var self=this;var 自分=self;var t;t=this['読む']();dtlbind(this,function(){var self=this;var 自分=self;return (t==="ON");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("OFF");(this['加速度Y']['かめた']['図形を作る']())['消える']();return this['加速度Y']['かめた']['消える']()['ペンなし']();}));return dtlbind(this,function(){var self=this;var 自分=self;return (t==="OFF");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("ON");return this['加速度Y']['かめた']['現れる']()['ペンあり']();}));});this['加速度Z']['ボタン']['動作']=dtlbind(this,function(){var self=this;var 自分=self;var t;t=this['読む']();dtlbind(this,function(){var self=this;var 自分=self;return (t==="ON");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("OFF");(this['加速度Z']['かめた']['図形を作る']())['消える']();return this['加速度Z']['かめた']['消える']()['ペンなし']();}));return dtlbind(this,function(){var self=this;var 自分=self;return (t==="OFF");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("ON");return this['加速度Z']['かめた']['現れる']()['ペンあり']();}));});this['Aボタン']['ボタン']['動作']=dtlbind(this,function(){var self=this;var 自分=self;var t;t=this['読む']();dtlbind(this,function(){var self=this;var 自分=self;return (t==="ON");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("OFF");(this['Aボタン']['かめた']['図形を作る']())['消える']();return this['Aボタン']['かめた']['消える']()['ペンなし']();}));return dtlbind(this,function(){var self=this;var 自分=self;return (t==="OFF");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("ON");return this['Aボタン']['かめた']['現れる']()['ペンあり']();}));});this['Bボタン']['ボタン']['動作']=dtlbind(this,function(){var self=this;var 自分=self;var t;t=this['読む']();dtlbind(this,function(){var self=this;var 自分=self;return (t==="ON");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("OFF");(this['Bボタン']['かめた']['図形を作る']())['消える']();return this['Bボタン']['かめた']['消える']()['ペンなし']();}));return dtlbind(this,function(){var self=this;var 自分=self;return (t==="OFF");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("ON");return this['Bボタン']['かめた']['現れる']()['ペンあり']();}));});this['温度']['ボタン']['動作']=dtlbind(this,function(){var self=this;var 自分=self;var t;t=this['読む']();dtlbind(this,function(){var self=this;var 自分=self;return (t==="ON");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("OFF");(this['温度']['かめた']['図形を作る']())['消える']();return this['温度']['かめた']['消える']()['ペンなし']();}));return dtlbind(this,function(){var self=this;var 自分=self;return (t==="OFF");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("ON");return this['温度']['かめた']['現れる']()['ペンあり']();}));});this['磁力X']['ボタン']['動作']=dtlbind(this,function(){var self=this;var 自分=self;var t;t=this['読む']();dtlbind(this,function(){var self=this;var 自分=self;return (t==="ON");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("OFF");(this['磁力X']['かめた']['図形を作る']())['消える']();return this['磁力X']['かめた']['消える']()['ペンなし']();}));return dtlbind(this,function(){var self=this;var 自分=self;return (t==="OFF");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("ON");return this['磁力X']['かめた']['現れる']()['ペンあり']();}));});this['磁力Y']['ボタン']['動作']=dtlbind(this,function(){var self=this;var 自分=self;var t;t=this['読む']();dtlbind(this,function(){var self=this;var 自分=self;return (t==="ON");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("OFF");(this['磁力Y']['かめた']['図形を作る']())['消える']();return this['磁力Y']['かめた']['消える']()['ペンなし']();}));return dtlbind(this,function(){var self=this;var 自分=self;return (t==="OFF");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("ON");return this['磁力Y']['かめた']['現れる']()['ペンあり']();}));});this['磁力Z']['ボタン']['動作']=dtlbind(this,function(){var self=this;var 自分=self;var t;t=this['読む']();dtlbind(this,function(){var self=this;var 自分=self;return (t==="ON");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("OFF");(this['磁力Z']['かめた']['図形を作る']())['消える']();return this['磁力Z']['かめた']['消える']()['ペンなし']();}));return dtlbind(this,function(){var self=this;var 自分=self;return (t==="OFF");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("ON");return this['磁力Z']['かめた']['現れる']()['ペンあり']();}));});this['方位']['ボタン']['動作']=dtlbind(this,function(){var self=this;var 自分=self;var t;t=this['読む']();dtlbind(this,function(){var self=this;var 自分=self;return (t==="ON");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("OFF");(this['方位']['かめた']['図形を作る']())['消える']();this['方位']['かめた']['消える']()['ペンなし']();return this['方位']['かめたM']['消える']();}));return dtlbind(this,function(){var self=this;var 自分=self;return (t==="OFF");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("ON");this['方位']['かめた']['現れる']()['ペンあり']();return this['方位']['かめたM']['現れる']();}));});this['ピン0']['ボタン']['動作']=dtlbind(this,function(){var self=this;var 自分=self;var t;t=this['読む']();dtlbind(this,function(){var self=this;var 自分=self;return (t==="ON");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("OFF");(this['ピン0']['かめた']['図形を作る']())['消える']();return this['ピン0']['かめた']['消える']()['ペンなし']();}));return dtlbind(this,function(){var self=this;var 自分=self;return (t==="OFF");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("ON");return this['ピン0']['かめた']['現れる']()['ペンあり']();}));});this['ピン1']['ボタン']['動作']=dtlbind(this,function(){var self=this;var 自分=self;var t;t=this['読む']();dtlbind(this,function(){var self=this;var 自分=self;return (t==="ON");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("OFF");(this['ピン1']['かめた']['図形を作る']())['消える']();return this['ピン1']['かめた']['消える']()['ペンなし']();}));return dtlbind(this,function(){var self=this;var 自分=self;return (t==="OFF");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("ON");return this['ピン1']['かめた']['現れる']()['ペンあり']();}));});this['ピン2']['ボタン']['動作']=dtlbind(this,function(){var self=this;var 自分=self;var t;t=this['読む']();dtlbind(this,function(){var self=this;var 自分=self;return (t==="ON");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("OFF");(this['ピン2']['かめた']['図形を作る']())['消える']();return this['ピン2']['かめた']['消える']()['ペンなし']();}));return dtlbind(this,function(){var self=this;var 自分=self;return (t==="OFF");})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['書く']("ON");return this['ピン2']['かめた']['現れる']()['ペンあり']();}));});return this['タイマー']['作る']()['間隔']((0.16))['回数']((60000))['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['ステータス']['書く']((this['MBit']['ステータス']));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['加速度X']>=(0));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['加速度X']['書く']((("右:"+this['MBit']['加速度X'])));}));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['加速度X']<(0));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['加速度X']['書く']((("左:"+this['MBit']['加速度X'])));}));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['加速度Y']>=(0));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['加速度Y']['書く']((("後:"+this['MBit']['加速度Y'])));}));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['加速度Y']<(0));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['加速度Y']['書く']((("前:"+this['MBit']['加速度Y'])));}));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['加速度Z']>=(0));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['加速度Z']['書く']((("下:"+this['MBit']['加速度Z'])));}));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['加速度Z']<(0));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['加速度Z']['書く']((("上:"+this['MBit']['加速度Z'])));}));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['Aボタン']===(0));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['Aボタン']['書く']((("OFF:"+this['MBit']['Aボタン'])));}));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['Aボタン']===(1));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['Aボタン']['書く']((("ON :"+this['MBit']['Aボタン'])));}));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['Aボタン']===(2));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['Aボタン']['書く']((("ON!:"+this['MBit']['Aボタン'])));}));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['Bボタン']===(0));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['Bボタン']['書く']((("OFF:"+this['MBit']['Bボタン'])));}));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['Bボタン']===(1));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['Bボタン']['書く']((("ON :"+this['MBit']['Bボタン'])));}));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['Bボタン']===(2));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['Bボタン']['書く']((("ON!:"+this['MBit']['Bボタン'])));}));this['温度']['書く']((this['MBit']['温度']));this['磁力X']['書く']((this['MBit']['磁力X']));this['磁力Y']['書く']((this['MBit']['磁力Y']));this['磁力Z']['書く']((this['MBit']['磁力Z']));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['方位']<(315));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['方位']['書く']((("西:"+this['MBit']['方位'])));}));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['方位']<(225));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['方位']['書く']((("南:"+this['MBit']['方位'])));}));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['方位']<(135));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['方位']['書く']((("東:"+this['MBit']['方位'])));}));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['方位']<(45));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['方位']['書く']((("北:"+this['MBit']['方位'])));}));dtlbind(this,function(){var self=this;var 自分=self;return (this['MBit']['方位']>(315));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;return this['方位']['書く']((("北:"+this['MBit']['方位'])));}));this['ピン0']['書く']((this['MBit']['ピン0']));this['ピン1']['書く']((this['MBit']['ピン1']));this['ピン2']['書く']((this['MBit']['ピン2']));dtlbind(this,function(){var self=this;var 自分=self;return (this['X']>(300));})['なら']()['実行'](dtlbind(this,function(){var self=this;var 自分=self;this['X']=(0);(this['加速度X']['かめた']['位置']((this['X']),(((this['MBit']['加速度X'])*(100))))['図形を作る']())['消える']();(this['加速度Y']['かめた']['位置']((this['X']),(((this['MBit']['加速度Y'])*(100))))['図形を作る']())['消える']();(this['加速度Z']['かめた']['位置']((this['X']),(((this['MBit']['加速度Z'])*(100))))['図形を作る']())['消える']();(this['Aボタン']['かめた']['位置']((this['X']),(((this['MBit']['Aボタン'])*(100))))['図形を作る']())['消える']();(this['Bボタン']['かめた']['位置']((this['X']),(((this['MBit']['Aボタン'])*(100))))['図形を作る']())['消える']();(this['温度']['かめた']['位置']((this['X']),(((this['MBit']['温度'])*(5))))['図形を作る']())['消える']();(this['磁力X']['かめた']['位置']((this['X']),(((this['MBit']['磁力X'])*(5))))['図形を作る']())['消える']();(this['磁力Y']['かめた']['位置']((this['X']),(((this['MBit']['磁力Y'])*(5))))['図形を作る']())['消える']();(this['磁力Z']['かめた']['位置']((this['X']),(((this['MBit']['磁力Z'])*(5))))['図形を作る']())['消える']();(this['方位']['かめた']['位置']((this['X']),(((this['MBit']['方位'])*(0.5))))['図形を作る']())['消える']();(this['ピン0']['かめた']['位置']((this['X']),(((this['MBit']['ピン0'])*(5))))['図形を作る']())['消える']();(this['ピン1']['かめた']['位置']((this['X']),(((this['MBit']['ピン1'])*(5))))['図形を作る']())['消える']();return (this['ピン2']['かめた']['位置']((this['X']),(((this['MBit']['ピン2'])*(5))))['図形を作る']())['消える']();}));this['加速度X']['かめた']['位置']((this['X']),(((this['MBit']['加速度X'])*(100))));this['加速度Y']['かめた']['位置']((this['X']),(((this['MBit']['加速度Y'])*(100))));this['加速度Z']['かめた']['位置']((this['X']),(((this['MBit']['加速度Z'])*(100))));this['Aボタン']['かめた']['位置']((this['X']),(((this['MBit']['Aボタン'])*(100))));this['Bボタン']['かめた']['位置']((this['X']),(((this['MBit']['Bボタン'])*(100))));this['温度']['かめた']['位置']((this['X']),(((this['MBit']['温度'])*(5))));this['磁力X']['かめた']['位置']((this['X']),(((this['MBit']['磁力X'])*(5))));this['磁力Y']['かめた']['位置']((this['X']),(((this['MBit']['磁力Y'])*(5))));this['磁力Z']['かめた']['位置']((this['X']),(((this['MBit']['磁力Z'])*(5))));this['方位']['かめた']['位置']((this['X']),(((this['MBit']['方位'])*(0.5))));this['ピン0']['かめた']['位置']((this['X']),(((this['MBit']['ピン0'])*(5))));this['ピン1']['かめた']['位置']((this['X']),(((this['MBit']['ピン1'])*(5))));this['ピン2']['かめた']['位置']((this['X']),(((this['MBit']['ピン2'])*(5))));this['方位']['後']=this['MBit']['方位'];this['方位']['かめたM']['右回り'](((this['方位']['後']-this['方位']['前'])));this['方位']['前']=this['方位']['後'];return this['X']=(this['X']+(5));}));}).checkerror().apply(root,[]);