'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // const n = Math.floor(Math.random() * 6);
    // btn.textContent = n ;

    // switch (n) {
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '小吉';
    //     break;
    //   case 3:
    //     btn.textContent = '吉';
    //     break;
    //   case 4:
    //     btn.textContent = '末吉';
    //     break;
    //   case 5:
    //     btn.textContent = '凶';
    //     break;
    //   case 6:
    //     btn.textContent = '大凶';
    //     break;
    // }

 //配列を使ってもっと短くかける
    // const results = ['大吉', '中吉', '小吉', '吉','末吉', '凶', '大凶'];
    //配列の要素が加わった時に自動的に要素数を加える処理をしておこう
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    //さらに短く書ける
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    
    //確率を変更してみよう
    // 単純に確率をあげたい要素の数を増やす
    // const results = ['大吉','大吉','大吉','大吉','大吉','大吉','大吉','大吉','大吉','大吉','大吉', '中吉', '小吉', '吉','末吉', '凶', '大凶'];
    // btn.textContent = results[Math.floor(Math.random() * results.length)];
    
    // Math.randomを使う方法
    const n = Math.random();
    if(n < 0.05){
      btn.textContent = '大吉'; //5% で大吉
    } else if (n < 0.2) {
      btn.textContent = '中吉'; //15%(20-5%) で中吉
    } else {
      btn.textContent = '吉'; //残り80％ で吉
    }
    });
}