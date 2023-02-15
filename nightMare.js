
//■■■■■1/31 Day3 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
function checkArray(topContent,pendingArray=[],output=""){//この中で数値型になるまで永遠に再帰関数を回す。また、取り回しの良さから、結果は配列ではなく文字列に加算していく
    // cnt++;
    // console.log(cnt);
    // console.log(topContent);
    // console.log(pendingArray);

    if (typeof topContent=== "number"){//数値型になった場合、元関数に戻すために数値をoutputに代入する
        if (output===""){
            output = topContent
        } else {
            output +=` ${topContent}`;
        }
        if (pendingArray.length===0){//数値代入後に、pendidngArrayの長さを見て、まだ配列が残っている場合はpendingArray ->TopContentに入れなおして再度関数を呼ぶ
            return output;
        } else {
            let tempArray = [];
            return checkArray(pendingArray,tempArray,output);
        }
    } else { //topContentが数値型でない場合は、先頭を取り除いて、topContentとpendingArrayに再度わける
        const topArray = topContent.shift();
        if (pendingArray.length !==0){
            topContent = topContent.concat(pendingArray);
            // console.log(cnt,topContent)
        }
        return checkArray(topArray,topContent,output);
    }
}
function flatten(array){
    const checkLenght = array.length;
    let tempLetter="";
    for (let index = 0 ; index < checkLenght;index++){
        // console.log(index);
        let topContent = array.shift();
        const checkValue = checkArray(topContent); //配列の先頭から１つずつ数値型or配列(object)かを調べる
        if (tempLetter ===""){
            tempLetter = checkValue;
        } else {
            tempLetter +=` ${checkValue}`
        }
    }
    const tempValue = tempLetter.trim().split(" ");
    let returnValue = [];
    for (let i= 0 ; i < tempValue.length ; i++){
        returnValue.push(parseInt(tempValue[i]));
    }
    return returnValue;
}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

//■■■■■2/2 Day5 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
/**
* @pincreasingSequence {number} num - チェックしたい数字
* @returns {boolean,str} 与えられた数字が素数かどうか。もしも正の整数以外がinputされた場合はinputエラーを吐き出す
*/
// ここにコードを書きましょう
function isPrime (num) {
    const checkTrigger = Number.isInteger(num);
    if (checkTrigger){
        if (num <=0){
            return "正の整数を入れてください。0 or 負の値が入っています。";
        } else if (num ===1){
            return false;
        } else {
            for (let cnt =2 ; cnt < num ; cnt++){
                if (num % cnt ===0){
                    return false;
                }
            }
            return true;
        }
    } else {
        return "正の整数を入れてください。小数点を含む数字が入ってます。";
    }
}

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

//■■■■■2/6 Day7 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
/**
 * @param {Array<number>} ??? - 数字の配列
* @returns {Array<number>} 与えられた配列の要素を昇順に並べた新しい配列
*/
function sort(array) {
    // ここにコードを書きましょう.
    let tempArray = [];
    for (let i = 0; i < array.length ; i++) {
        tempArray[i] = array [i];
    }
    for (let i = 0 ; i < array.length ; i ++){
        for (let j = 0 ; j < array.length -i-1 ;j++){
            if (tempArray[j] > tempArray[j+1]){
                let temp = tempArray[j];
                tempArray[j] = tempArray[j+1];
                tempArray[j+1] = temp;
            }
        }
    }
    return tempArray;
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■2/7 Day8 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//Day3 , Day7の問題と同じなので割愛
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

//■■■■■2/9 Day10 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//問題を都合よく解釈してるかも。「ひとつのレイヤー＝＞オブジェクトに１つのキー・値のペアしかいない」で解いてます。
function checkDepth(obj,cnt = 1){
    if (typeof obj !=="object"){
        return cnt;
    } else {
        cnt++;
        const keys = Object.keys(obj);
        return checkDepth (obj[keys[0]],cnt);
    }
}
function getDepth (obj){
    let depthArray = [];
    for (const key in obj) {
        const depth = checkDepth(obj[key]);
        depthArray.push(depth);   
    }
    return Math.max(...depthArray);
}


//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

//■■■■■2/10 Day11 ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
function getIntroductions(num){
    let result = [];
    for(let i =0; i < num ; i++){
        let tempLetter=`welcome ${i+1}`;
        if(i !==0){
            for (let j=1; j <=i;j++){
                if (j===1){
                    tempLetter =`${tempLetter}, meet ${j}`;
                } else if (j !==i) {
                    tempLetter = `${tempLetter}, ${j}`
                } else {
                    tempLetter =`${tempLetter} and ${j}`;
                }                
            }
        }
        result.push(tempLetter);
    }
    return result;
}

function christmasTree(string,num){
    let resultLetter = "";
    let initSpace = "";
    for (let i=0; i < num; i++){
        //１行目--> スペースを｛num-1個 +  "string"}
        if (i === 0){
            for (let j=0; j < num -1; j++){
                initSpace += " ";
            }
            // console.log(initSpace.length);
            resultLetter = `${initSpace}${string}`;
        } else {
            let tempLetter = "";
            if (initSpace.length >0){
                initSpace = initSpace.slice(1); //スペースを１つ削る
                // console.log(initSpace.length)
                tempLetter = initSpace;
                // console.log(tempLetter.length);
            }
            for (let j=0; j <=i;j++){
                if (j===0){
                    tempLetter = `${tempLetter}${string}`;
                } else {
                    tempLetter = `${tempLetter} ${string}`;
                }
            } 
            resultLetter = `${resultLetter}\n${tempLetter}`;
        }
    }
    return resultLetter;
}
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■



//■■■■■〇/〇 Day△ ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■