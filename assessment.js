'use strict';
const userNameInput = document.getElementById('user-name');
const assessmentButton = document.getElementById('assessment');
const resultDivided = document.getElementById('result-area');
const tweetDivided = document.getElementById('tweet-area');


assessmentButton.onclick = () => {
    const userName = userNameInput.value;
    if(userName.length === 0) {
        return;
    }
    
    resultDivided.innerText = '';
    const header = document.createElement('h3');
    header.innerText = '診断結果';
    resultDivided.appendChild(header);
    
    const paragraph = document.createElement('p');
    const result = assessment(userName);
    paragraph.innerText = result;
    resultDivided.appendChild(paragraph);
    tweetDivided.innerText = '';
    const anchor = document.createElement('a');
    const hrefValue 
    = 'https://twitter.com/intent/tweet?button_hashtag=' +
      encodeURIComponent('貴方の恐ろしいところ') +
      '&ref_src=twsrc%5Etfw';

    anchor.setAttribute('href', hrefValue);
    anchor.setAttribute('class', 'twiter-hushtag-button');
    anchor.setAttribute('dota-text', result);
    anchor.innerText = 'twiter #貴方の恐ろしいところ';
    tweetDivided.appendChild(anchor);
    };


const answers = [
    '{userName}の恐ろしいところは、怖いもの知らずなところです。',
    '{userName}の恐ろしいところは、完璧なところです',
    '{userName}の恐ろしいところは、大変なまでに努力家なところです',
    '{userName}の恐ろしいところは、頑張りすぎてしまうところです',
    '{userName}の恐ろしいところは、自分の感情を隠してしまうところです',
    '{userName}の恐ろしいところは、行動力がありすぎて周りを振り回してしまうところです',
    '{userName}の恐ろしいところは、自分の努力を他人に見せないところです',
    '{userName}の恐ろしいところは、周りを気にしてしまうところです',
    '{userName}の恐ろしいところは、優しすぎるところです',
    '{userName}の恐ろしいところは、変人すぎて周りの人がついていけないところです',
    '{userName}の恐ろしいところは、イカれているところです',
    '{userName}の恐ろしいところは、集中力が高すぎるところです'
];

/**
 * 名前の文字列を渡すと診断結果を返す関数
 * @param {string} userName ユーザの名前
 * @return {string} 診断結果
 */
function assessment(userName) {
    //全文字のード番号を取得してそれを足し合わせる
    let sumOfCharCode = 0;
    for(let i = 0; i < userName.length; i++) {
        sumOfCharCode = sumOfCharCode + userName.charCodeAt(i);
    }

    

    //文字のコード番号の合計を伊藤の数で割って添字の数値を求める
    const index = sumOfCharCode % answers.length;
    let result = answers[index];

    result = result.replaceAll('{userName}',userName);
    return result;
}