easyQuestion = [
  {
    "title": "Electronics Shop",
    "description": "A person wants to determine the most expensive computer keyboard and USB drive that can be purchased with a give budget. Given price lists for keyboards and USB drives and a budget, find the cost to buy them. If it is not possible to buy both items, return -1.",
    "example": "b = 60\nkeyboards = [40, 50, 60]\ndrives = [5, 8, 12]\n\nThe person can buy (40 keyboards + 12 USB drives = 52), or (50 keyboards + 8 USB drives = 58). Choose the latter as the more expensive option and return 58.",
    "return": "int: the maximum that can be spent, or -1 if it is not possible to buy both items",
    "url": "https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true",
    "testCases": [{
      "testCase": "5 1 1\n4\n5",
      "ans": "-1"
    }, {
      "testCase": "10 2 3\n3 1\n5 2 8",
      "ans": "9"
    }, {
      "testCase": "20 5 6\n2 4 3 6 8\n5 1 4 7 9 10",
      "ans": "18"
    }],
    "cCodeText1": "",
    "cCodeText2": "",
    "cppCodeText1": "int countMaximum(int keyboards[], int pendrives[], int s){\n\t// write yor code here\n\n\treturn 0;\n}\n",
    "cppCodeText2": "\tint s;\n\tint n;\n\tint m;\n\tcin >> s >> n >> m;\n\tint k[n];\n\tint u[m];\n\tfor(int i=0;i<n;i++) {\n\t\tcin >> k[i];\n\t}\n\tfor(int i=0;i<m;i++) {\n\t\tcin >> u[i];\n\t}\n\tcout << countMaximum(k, u, s);",
    "javaCodeText": "int s = in.nextInt();\n\t\tint n = in.nextInt();\n\t\tint m = in.nextInt();\n\t\tint[] keyboards = new int[n];\n\t\tfor(int keyboards_i=0; keyboards_i < n; keyboards_i++){\n\t\t\tkeyboards[keyboards_i] = in.nextInt();\n\t\t}\n\t\tint[] pendrives = new int[m];\n\t\tfor(int pendrives_i=0; pendrives_i < m; pendrives_i++){\n\t\t\tpendrives[pendrives_i] = in.nextInt();\n\t\t}\n\t\tSystem.out.println(countMaximum(keyboards, pendrives, s));\n\t}\n\n\tpublic static int countMaximum(int keyboards[], int pendrives[], int s) {\n\t// write your code here\n\n\t\treturn 0;\n\t}",
    "explanation1": "There is no way to buy one keyboard and one USB drive because 4 + 5 > 5 , so return -1."
  },
  {
    "title": "Largest Number After Digit Swaps by Parity",
    "description": "You are given a positive integer num. You may swap any two digits of num that have the same parity (i.e. both odd digits or both even digits).",
    "example": "Input:number = 1234\nOutput = 3421\n\nThe person can buy (40 keyboards + 12 USB drives = 52), or (50 keyboards + 8 USB drives = 58). Choose the latter as the more expensive option and return 58.",
    "return": "int: the largest possible value of num after any number of swaps.",
    "url": "https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/",
    "testCases": [{
      "testCase": "1234",
      "ans": "3412"
    }, {
      "testCase": "65875",
      "ans": "87655"
    }, {
      "testCase": "756473",
      "ans": "776453"
    }],
    "cCodeText1": "int swapNum(int num) {\n\t// write yor code here\n\n\treturn 0;\n}\n",
    "cCodeText2": "\tint num;\n\tscanf(\"%d\",&num);\n\tprintf(\"%d\",swapNum(num));",
    "cppCodeText1": "int swapNum(int num) {\n\t// write yor code here\n\n\treturn 0;\n}\n",
    "cppCodeText2": "\tint num;\n\tcin >> num;\n\tcout << swapNum(num);",
    "javaCodeText": "int num = in.nextInt();\n\t\tSystem.out.println(swapNum(num));\n\t}\n\n\tpublic static int swapNum(int num) {\n\t// write your code here\n\n\t\treturn 0;\n\t}",
    "explanation1": "Swap the digit 3 with the digit 1, this results in the number 3214.\nSwap the digit 2 with the digit 4, this results in the number 3412.\nNote that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number.\nAlso note that we may not swap the digit 4 with the digit 1 since they are of different parities."
  },
  {
    "title": "Binary Tree Postorder Traversal",
    "description": "Given the root of a binary tree, return the postorder traversal of its nodes' values.",
    "img": "img/q3.jpg",
    "example": "Input:root = [1,null,2,3]\nOutput = [3,2,1]",
    "return": "The postorder traversal of its nodes' values.",
    "url": "https://leetcode.com/problems/binary-tree-postorder-traversal/",
    "testCases": [{
      "testCase": "[1,null,2,3]",
      "ans": "[3,2,1]"
    }, {
      "testCase": "[1]",
      "ans": "[1]"
    }, {
      "testCase": "[1]",
      "ans": "[1]"
    }],
    "cCodeText1": "",
    "cCodeText2": "",
    "cppCodeText1": "",
    "cppCodeText2": "",
    "javaCodeText": "",
    "explanation1": ""
  },
  {
    "title": "Reverse Bits",
    "description": "Reverse bits of a given 32 bits unsigned integer.(The input must be a binary string of length 32)",
    "example": "Input:n = 00000010100101000001111010011100\nOutput = 3421\n\nThe person can buy (40 keyboards + 12 USB drives = 52), or (50 keyboards + 8 USB drives = 58). Choose the latter as the more expensive option and return 58.",
    "return": "int",
    "url": "https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/",
    "testCases": [{
      "testCase": "00000010100101000001111010011100",
      "ans": "964176192"
    }, {
      "testCase": "11111111111111111111111111111101",
      "ans": "3221225471"
    }, {
      "testCase": "",
      "ans": ""
    }],
    "cCodeText1": "int reverseBit(string num) {\n\t// write yor code here\n\n\treturn 0;\n}\n",
    "cCodeText2": "\tint num;\n\tscanf(\"%s\",&num);\n\tprintf(\"%d\",reverseBit(num));",
    "cppCodeText1": "int reverseBit(string num) {\n\t// write yor code here\n\n\treturn 0;\n}\n",
    "cppCodeText2": "\tstring num;\n\tcin >> num;\n\tcout << reverseBit(num);",
    "javaCodeText": "String num = in.nextLine();\n\t\tSystem.out.println(reverseBit(num));\n\t}\n\n\tpublic static int reverseBit(String num) {\n\t// write your code here\n\n\t\treturn 0;\n\t}",
    "explanation1": "The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000"
  },
  {
    "title": "Separate the Numbers",
    "description": "A numeric string s is beautiful if it can be split into a sequence of two or more positive integers a[i],a[2],...,a[n], satisfying the following conditions:\n",
    "condition": "1. a[i] - a[i-1] = 1 for any 1<i<=n (i.e., each element in the sequence is 1 more than the previous element).\n\n2. No a[i] contains a leading zero. For example, we can split s = 10203 into the sequence {1,02,03}, but it is not beautiful because 02 and 03 have leading zeroes.\n\n3. The contents of the sequence cannot be rearranged. For example, we can split s = 312 into the sequence {3,1,2}, but it is not beautiful because it breaks our first constraint (i.e., 1-3≠1).",
    "example": "Input:number = 1234\nOutput = 3421\n\nThe person can buy (40 keyboards + 12 USB drives = 52), or (50 keyboards + 8 USB drives = 58). Choose the latter as the more expensive option and return 58.",
    "return": "int: the largest possible value of num after any number of swaps.",
    "url": "https://www.hackerrank.com/challenges/separate-the-numbers/problem",
    "testCases": [{
      "testCase": "",
      "ans": ""
    }, {
      "testCase": "",
      "ans": ""
    }, {
      "testCase": "",
      "ans": ""
    }],
    "cCodeText1": "",
    "cCodeText2": "",
    "cppCodeText1": "",
    "cppCodeText2": "",
    "javaCodeText": "",
    "explanation1": ""
  }
]

var tabTimePerLine = [];
var storeLineData = [];
var selectQuestion;
var nowQuestionIndex;
var selectedSet = []; //user的題庫



function getRandomInt(max) { //選擇三題到題庫中
  while (selectedSet.length < 3) {
    var selectQuestionIndex = Math.floor(Math.random() * max);
    if (!selectedSet.includes(selectQuestionIndex)) {
      selectedSet.push(selectQuestionIndex);
    }
  }
  console.log(selectedSet);

  nowQuestionIndex = selectedSet[0];
  selectQuestion = easyQuestion[nowQuestionIndex];
  return nowQuestionIndex;
}

$(document).ready(function () {


  $('#testerForm').on('submit', function (e) { //開始測試

    // e.preventDefault();
    vm.start = !vm.start;
    localStorage.removeItem('username');
    localStorage.removeItem('storeLineData');

    localStorage.setItem('username', vm.userName);

    console.log(vm.userAge);
    console.log(vm.userMajor);
    $("#body").css("overflow-y", "scroll");

    var formData = $('#testerForm').serialize();
    formData.push({ name: "question", value: selectedSet });

    $.ajax({
      type: "POST",
      url: "get-data.php",
      data: formData,
      datatype: "html",
      success: function (result) {
        console.log(result);
      }
    })
    // var selectSetDB = {}
    // for (let i = 0; i < selectedSet.length; i++) {
    //     selectSetDB
    // }
    // $.post("get-data.php", selectedSet)
  })



  $("#inputbox").val(selectQuestion.testCases[0].testCase);

  $("#st").click(function () {
    //當按下run code button時，output area顯示loading
    $("#div").html("Loading ......");
  });

  for (var i = 0; i < vm.codingMaxIndex; i++) {
    storeLineData.push({ 'time': 0, 'backspace': 0, 'delete': 0 })
    // tabTimePerLine.push(0);
  }
  var mouseCtx = $("#mouseChart");
  var keyCtx = $("#keyboardFeq");
  // var bsCtx = $("#backspaceTime");
  // var deCtx = $("#deleteTime");
  var tabCtx = $("#tabTime");

  //儲存mouse軌跡
  const mouseData = {
    datasets: [{
      label: 'mouse position(x,y)',
      data: [],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      pointRadius: 1,
    }],
  };

  mouseChart = new Chart(mouseCtx, {
    type: "scatter", // 圖表類型
    data: mouseData,
    options: {
      scales: {
        x: {
          suggestedMin: 0,
          suggestedMax: 1200
        },
        y: {
          suggestedMin: 0,
          suggestedMax: 1200
        }
      },
      plugins: {
        title: {
          display: true,
          text: 'Mouse Position Scatter Chart'
        }
      }
    }
  });
  var keyboardChart = new Chart(keyCtx, {
    type: 'bar',
    data: {
      labels: ['Tab', 'Delete', 'Backspace'],
      datasets: [{
        label: 'Keyboard Frequency',
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(255, 205, 86, 0.2)']
      }]
    },
    options: {
      y: {
        suggestedMin: 0,
        suggestedMax: 100
      },
      plugins: {
        title: {
          display: true,
          text: 'Keyboard Frequency Bar Chart'
        }
      }
    }
  });
  // var bsChart = new Chart(bsCtx, {
  //   type: 'bar',
  //   data: {
  //     labels: vm.columnIndex,
  //     datasets: [{
  //       label: 'backspace in per line',
  //       data: backspaceTimePerLine,
  //       backgroundColor: ['rgba(255, 99, 132, 0.2)']
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         suggestedMin: 0,
  //         suggestedMax: 40
  //       }
  //     },
  //     plugins: {
  //       title: {
  //         display: true,
  //         text: 'Backspace Frequency Bar Chart'
  //       }
  //     }
  //   }
  // });

  // var deChart = new Chart(deCtx, {
  //   type: 'bar',
  //   data: {
  //     labels: vm.columnIndex,
  //     datasets: [{
  //       label: 'delete in per line',
  //       data: deleteTimePerLine,
  //       backgroundColor: ['rgba(255, 159, 64, 0.2)']
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         suggestedMin: 0,
  //         suggestedMax: 40
  //       }
  //     },
  //     plugins: {
  //       title: {
  //         display: true,
  //         text: 'Delete Frequency Bar Chart'
  //       }
  //     }
  //   }
  // });

  // var tabChart = new Chart(tabCtx, {
  //   type: 'bar',
  //   data: {
  //     labels: vm.columnIndex,
  //     datasets: [{
  //       label: 'tab in per line',
  //       data: tabTimePerLine,
  //       backgroundColor: ['rgba(41, 135, 66, 0.2)']
  //     }]
  //   },
  //   options: {
  //     scales: {
  //       y: {
  //         suggestedMin: 0,
  //         suggestedMax: 6
  //       }
  //     },
  //     plugins: {
  //       title: {
  //         display: true,
  //         text: 'Tab Frequency Bar Chart'
  //       }
  //     }
  //   }
  // });

  var offset = $(".CodeMirror-scroll").offset();
  var one = 0; //控制時間
  var dt;
  var waittime = 0;
  var mouseCap = 0;
  $(".CodeMirror-scroll").mousemove(
    function (e) {
      // console.log(editor.coordsChar());
      cursorPosTop = e.pageY - parseInt(offset.top);
      cursorPosLeft = e.pageX - offset.left;
      vm.pageX = cursorPosLeft;
      vm.pageY = cursorPosTop;
      if (mouseCap % 10 == 0) { //調整捕捉mouse的頻率
        mouseData.datasets[0].data.push({ x: cursorPosLeft, y: cursorPosTop });
        mouseCap = 0;
      }
      // console.log(mouseData.datasets[0].data);
      $(".circle").css('top', cursorPosTop);
      $(".circle").css('left', cursorPosLeft);
      mouseCap += 1;
      // console.log(mouseChart.data);
    }
  )
  $(".CodeMirror-scroll").mousedown(
    function () {
      if (one == 0) {
        vm.sec = 0;
        vm.min = 0;
        // $(".time").text("時間 0:0");
        dt = setInterval(
          function () {
            waittime += 1;
            vm.hr = Math.floor(waittime / 3600);
            vm.min = Math.floor((waittime % 3600) / 60);
            vm.sec = Math.round(waittime % 60);
          }
          , 1000);
        one = 1;
      }
    });

  $("#chartbtn").click(
    function () {
      mouseChart.data = mouseData;
      // bsChart.data.datasets[0].data = backspaceTimePerLine;
      // deChart.data.datasets[0].data = deleteTimePerLine;
      keyboardChart.data.datasets[0].data[0] = vm.tabTime;
      keyboardChart.data.datasets[0].data[1] = vm.deleteTime;
      keyboardChart.data.datasets[0].data[2] = vm.backspaceTime;
      mouseChart.update();
      keyboardChart.update();
      // bsChart.update();
      // deChart.update();
    }
  )

  // $("#submitbtn").click(
  //   function () {

  //     // vm.codingMaxIndex = textValue.length;
  //     countTabPerLine();
  //     tabChart.data.datasets[0].data = tabTimePerLine;
  //     tabChart.update();
  //   }
  // )
});

//記錄下互動行為
var vm = new Vue({
  el: "#app",
  data: {
    keyboard_press: [
      { key: "A", num: 65, click: 0 }, { key: "B", num: 66, click: 0 }, { key: "C", num: 67, click: 0 }, { key: "D", num: 68, click: 0 }, { key: "E", num: 69, click: 0 }, { key: "F", num: 70, click: 0 }, { key: "G", num: 71, click: 0 }, { key: "H", num: 72, click: 0 }, { key: "I", num: 73, click: 0 }, { key: "J", num: 74, click: 0 }, { key: "K", num: 75, click: 0 }, { key: "L", num: 76, click: 0 }, { key: "M", num: 77, click: 0 }, { key: "N", num: 78, click: 0 }, { key: "O", num: 79, click: 0 }, { key: "P", num: 80, click: 0 }, { key: "Q", num: 81, click: 0 }, { key: "R", num: 82, click: 0 }, { key: "S", num: 83, click: 0 }, { key: "T", num: 84, click: 0 }, { key: "U", num: 85, click: 0 }, { key: "V", num: 86, click: 0 }, { key: "W", num: 87, click: 0 }, { key: "X", num: 88, click: 0 }, { key: "Y", num: 89, click: 0 }, { key: "Z", num: 90, click: 0 }, { key: "{", num: 123, click: 0 }, { key: "}", num: 125, click: 0 }, { key: "(", num: 40, click: 0 }, { key: ")", num: 41, click: 0 }, { key: "[", num: 91, click: 0 }, { key: "]", num: 93, click: 0 }, { key: "0", num: 48, click: 0 }, { key: "1", num: 49, click: 0 }, { key: "2", num: 50, click: 0 }, { key: "3", num: 51, click: 0 }, { key: "4", num: 52, click: 0 }, { key: "5", num: 53, click: 0 }, { key: "6", num: 54, click: 0 }, { key: "7", num: 55, click: 0 }, { key: "8", num: 56, click: 0 }, { key: "9", num: 57, click: 0 }, { key: "=", num: 61, click: 0 }, { key: " ", num: 32, click: 0 },
      { key: "a", num: 97, click: 0 }, { key: "b", num: 98, click: 0 }, { key: "c", num: 99, click: 0 }, { key: "d", num: 100, click: 0 }, { key: "e", num: 101, click: 0 }, { key: "f", num: 102, click: 0 }, { key: "g", num: 103, click: 0 }, { key: "h", num: 104, click: 0 }, { key: "i", num: 105, click: 0 }, { key: "j", num: 106, click: 0 }, { key: "k", num: 107, click: 0 }, { key: "l", num: 108, click: 0 }, { key: "m", num: 109, click: 0 }, { key: "n", num: 110, click: 0 }, { key: "o", num: 111, click: 0 }, { key: "p", num: 112, click: 0 }, { key: "q", num: 113, click: 0 }, { key: "r", num: 114, click: 0 }, { key: "s", num: 115, click: 0 }, { key: "t", num: 116, click: 0 }, { key: "u", num: 117, click: 0 }, { key: "v", num: 118, click: 0 }, { key: "w", num: 119, click: 0 }, { key: "x", num: 120, click: 0 }, { key: "y", num: 121, click: 0 }, { key: "z", num: 122, click: 0 }],
    codes: [],
    start: false,
    userName: undefined,
    userAge: undefined,
    userMajor: undefined,
    language: "cpp",
    questionNum: 0,
    selectQuestionIndex: getRandomInt(easyQuestion.length),
    selectQuestion: selectQuestion,
    expectOutput: selectQuestion.testCases[0].ans,
    open_record: false,
    submit: true,
    run_code: 0,
    commitTime: 0,
    backspaceTime: 0,
    deleteTime: 0,
    tabTime: 0,
    textLength: codebox.value.length,
    currentLineNumber: undefined, //判斷目前在第幾行
    currentColumnIndex: undefined, ////判斷目前行數的index
    pageX: undefined,
    pageY: undefined,
    copy: 0,
    cut: 0,
    paste: 0,
    undo: 0,
    redo: 0,
    hr: 0,
    min: 0,
    sec: 0,
    // columnIndex: [],
    codingMaxIndex: 5,
    successResult: [],
    errorResult: [],
    resulttemp: [],
    copyText: [],
    cutText: [],
    pasteText: [],
    storeLineData: []
  },
  methods: {
    addcode: function (a) {
      this.codes.push(a);
    },
    backspace: function () {
      this.codes.pop();
    }
  }
});

function openDetail(area) {
  if (area === 0) { //open record
    vm.open_record = !vm.open_record;
  }
}

function windowPopUp() {
  let submitResult = confirm('Submit your code?');
  if (submitResult) {
    console.log("submit!!");
    if (vm.questionNum < 2) {
      vm.questionNum = vm.questionNum + 1;
      console.log(vm.questionNum);
      toggleQuestion(vm.questionNum);
      window.scrollTo(0, 0);
    }
    else {
      let submitResultFinal = confirm('End the test?');
      if (submitResultFinal) {
        //結束測試
        console.log("End!!");
      }
    }
  } else {
    console.log("cancel!!");
  }
}


//選擇的程式語言
function selectLanguage(list) {
  vm.language = list;
  switch (vm.language) {
    case 'cpp':
      vm.codingMaxIndex = 5;
      this.editor.setOption("mode", 'text/x-c++src');
      editor.setValue('#include<iostream>\nusing namespace std;\n\n' + selectQuestion.cppCodeText1 + '\nint main() {\n' + selectQuestion.cppCodeText2 + '\n}');
      break;
    case 'c':
      vm.codingMaxIndex = 6;
      this.editor.setOption("mode", 'text/x-csrc');
      editor.setValue('#include <stdio.h>\n\n' + selectQuestion.cCodeText1 + '\nint main() {\n' + selectQuestion.cCodeText2 + '\n}');
      break;
    case 'java':
      vm.codingMaxIndex = 10;
      this.editor.setOption("mode", 'text/x-java');
      editor.setValue('import java.util.*;\nimport java.lang.*;\nimport java.io.*;\n\nclass Solution {\n\tpublic static void main(String[] args) {\n\t\tScanner in = new Scanner(System.in);\n\t\t' + vm.selectQuestion.javaCodeText + '\n}');
      break;
    case 'python3':
      vm.codingMaxIndex = 1;
      this.editor.setOption("mode", 'text/x-python');
      editor.setValue('');
      break;
  }
  storeLineData = [];
  for (var i = 0; i < vm.codingMaxIndex; i++) {
    storeLineData.push({ 'time': 0, 'backspace': 0, 'delete': 0 })
  }
}



var testCaseIndex = 0;
function selectTest(index) {
  testCaseIndex = index;
  let testCases = selectQuestion.testCases;
  if (testCaseIndex < 3) {
    $("#inputbox").attr("readonly", true);
    $("#inputbox").val(testCases[testCaseIndex].testCase);
    vm.expectOutput = testCases[testCaseIndex].ans;
  }
  else {
    $("#inputbox").attr("readonly", false);
    $("#inputbox").val("");
    vm.expectOutput = undefined;
  }
}

function toggleQuestion(questionNum) { //換題目
  vm.questionNum = questionNum; //網頁的第幾題
  nowQuestionIndex = selectedSet[questionNum]; //題組的index
  selectQuestion = easyQuestion[nowQuestionIndex]; //該index的題目內容
  vm.selectQuestion = selectQuestion;
  vm.selectQuestionIndex = nowQuestionIndex
  if (vm.language == 'java') {
    editor.setValue('import java.util.*;\nimport java.lang.*;\nimport java.io.*;\n\nclass Solution {\n\tpublic static void main(String[] args) {\n\t\tScanner in = new Scanner(System.in);\n\t\t' + selectQuestion.javaCodeText + '\n}');
  }
  else if (vm.language == 'cpp') {
    editor.setValue('#include<iostream>\nusing namespace std;\n\n' + selectQuestion.cppCodeText1 + '\nint main() {\n' + selectQuestion.cppCodeText2 + '\n}');
  }
  else if (vm.language == 'c') {
    editor.setValue('#include <stdio.h>\n\n' + selectQuestion.cCodeText1 + '\nint main() {\n' + selectQuestion.cCodeText2 + '\n}');
  }
  selectTest(testCaseIndex);
}


var nowKeydownNum = undefined;

var textValue = [];
var nowLineText = "";
var nowLine = -1;
var removeText = "";

function toggleLine(lineAction, deviation) {
  removeTextSpace(nowLineText);
  if (lineAction == 'add') { //新增一行
    // countLineNum(removeText, "add");
    if (numOfSpace >= vm.currentColumnIndex) {//在text前新增一行
      for (var i = 0; i < deviation; i++) {
        storeLineData.splice(vm.currentLineNumber - 1, 0, { 'time': 0, 'backspace': 0, 'delete': 0 });
      }
    }
    else { //在text後新增一行
      for (var i = 0; i < deviation; i++) {
        storeLineData.splice(vm.currentLineNumber, 0, { 'time': 0, 'backspace': 0, 'delete': 0 });
      }
    }
  }
  else if (lineAction == 'remove') { //移除一行
    // countLineNum(removeText, "remove");
    if (nowKeydownNum == 8) { //backspace
      storeLineData.splice(selectBefore, deviation);
    }
    else if (nowKeydownNum == 46) { //delete ------problem!!
      storeLineData.splice(vm.currentLineNumber, 1);
    }
    else {
      storeLineData.splice(selectBefore, deviation);
    }
  }
  vm.storeLineData = storeLineData;
  var localStoreLineData = JSON.stringify(storeLineData);
  localStorage.setItem("storeLineData", localStoreLineData);
}
var numOfSpace;

function removeTextSpace(nowLineText) {
  const pttrn = /^\s*/; //\s matches any white space character [\r\n\t\f]
  numOfSpace = nowLineText.match(pttrn)[0].length; //回傳text前共有幾個空格
}

function countTabPerLine() {
  for (var i = 0; i < tabTimePerLine.length; i++) {
    //   // console.log(textValue[i]);
    if (textValue[i] != undefined) {
      removeTextSpace(textValue[i]);
      tabTimePerLine[i] = numOfSpace;
    }
  }
}

var lt;
var storetime;
var timeControl = 0;

function startTimer(time) {
  if (timeControl == 1) { //close forward interval
    stopTimer();
  }
  storetime = time;
  lt = setInterval(
    function () {
      storetime += 1;
      // console.log(storetime);
      storeLineData[vm.currentLineNumber - 1].time = storetime;
      vm.storeLineData = storeLineData;
    }, 1000);
  timeControl = 1;
}
function stopTimer() {
  timeControl = 0;
  clearInterval(lt);
}

//用codemirror instance替換原本的textarea，也會將原本編輯器的鄭文同步給textarea，確保提交form時textarea會包含正文
var editor = CodeMirror.fromTextArea(document.getElementById('codebox'), {
  mode: "text/x-c++src",
  lineNumbers: true,
  autoRefresh: true,
  indentWithTabs: true,
  smartIndent: true,
  indentUnit: 4,
  lineWrapping: true,
  showCursorWhenSelecting: true,
  dragDrop: false, //文字拖動功能
  autoCloseBrackets: true, //補全(){}""...
  // lint: true,
});
editor.setValue('#include<iostream>\nusing namespace std;\n\n' + selectQuestion.cppCodeText1 + '\nint main() {\n' + selectQuestion.cppCodeText2 + '\n}');
editor.setSize("100%", "400px"); //調整高度
editor.save(); //copy正文到textarea

editor.setOption("extraKeys", { //額外設定快捷鍵
  'Ctrl-/': function (cm) {
    cm.toggleComment();
  }
});

var selectBefore;
var selectAfter;
editor.on("keydown", function (cm, e) {
  // console.log(textValue);
  // console.log(e);

  // var doctemp = cm.getDoc();
  // console.log(doctemp.getHistory());

  selectBefore = editor.getCursor(true).line;
  selectAfter = editor.getCursor(false).line;
  action = 'key';
  if (e.ctrlKey) {
    switch (e.keyCode) {
      case 90: //ctrl + z
        vm.undo += 1;
        break;
      case 89: //ctrl + y
        vm.redo += 1;
        break;
    }
  }
  else { //e.ctrlKey == false，才不會儲存到功能快捷鍵的key值
    var press = e.key;
    nowKeydownNum = e.keyCode;
    // console.log(nowKeydownNum);
    for (var i = 0; i < vm.keyboard_press.length; i++) {
      if (press == vm.keyboard_press[i].key) {
        vm.keyboard_press[i].click++;
        vm.addcode(vm.keyboard_press[i].key);
      }
    }
  }
  if (e.keyCode === 9) {
    vm.tabTime += 1;
  }
  detectKeyNumTime();
});

var storeText; //儲存editor.getSelection()的文字
function detectKeyNumTime() {
  if (nowKeydownNum == 8) {
    // vm.backspace(); //Backspace鍵  -------need?????????
    vm.backspaceTime += 1;
  }
  if (nowKeydownNum == 46) { //Delete鍵
    vm.deleteTime += 1;
  }
  keyboardTimePerLine(vm.currentLineNumber, nowKeydownNum);
}
function keyboardTimePerLine(line, nowKeydownNum) {
  switch (nowKeydownNum) {
    case 8:
      storeLineData[line - 1].backspace += 1;
      break;
    case 46:
      storeLineData[line - 1].delete += 1;
      break;
    // case 9:
    //   tabTimePerLine[line - 1] += 1;
    //   break;
  }
}

var action = undefined;
editor.on("mousedown", function (cm, e) {
  removeText = editor.getSelection();
  selectBefore = editor.getCursor(true).line;
  selectAfter = editor.getCursor(false).line;
  action = 'mouse';
});
var cursor;
editor.on("cursorActivity", function (cm, e) {
  cursor = cm.getCursor();
  textValue = editor.getValue().split("\n"); //儲存每一行的text，array形式
  // console.log(cm.getEditor());
  const deviation = Math.abs(textValue.length - vm.codingMaxIndex); //增加or減少幾行
  // console.log(deviation);
  if (vm.codingMaxIndex < textValue.length) { //表示增加行數
    toggleLine('add', deviation);
  }
  else if (vm.codingMaxIndex > textValue.length) { //表示減少行數
    toggleLine('remove', deviation);
  }
  nowLineText = textValue[cursor.line]; //目前所在行數的text
  if (action == 'key' && (cursor.line + 1) != vm.currentLineNumber) { //用key切換行時才須開始計時
    startTimer(storeLineData[cursor.line].time)
  }
  vm.currentLineNumber = cursor.line + 1;
  if (action == 'mouse') {
    startTimer(storeLineData[cursor.line].time);
  }
  nowLine = vm.currentLineNumber;
  vm.currentColumnIndex = cursor.ch;
  vm.codingMaxIndex = textValue.length; //儲存文字最大行數
})

editor.on("copy", function (cm, e) {
  vm.copyText.push({
    "text": editor.getSelection(),
    "line": cursor.line
  });
  vm.copy += 1;
})
editor.on("cut", function (cm, e) {
  vm.cutText.push({
    "text": editor.getSelection(),
    "line": cursor.line
  });
  vm.cut += 1;
})
editor.on("paste", function (cm, e) {
  vm.pasteText.push({
    "text": e.clipboardData.getData('text/plain'),
    "line": cursor.line
  });
  vm.paste += 1;
})

// $(".clean").click( //重新鍵
//   function () {
//     vm.codes = [];
//     for (var i = 0; i < vm.keyboard_press.length; i++) {
//       vm.keyboard_press[i].click = 0;
//     }
//     $(".CodeMirror-scroll").val("");
//     waittime = 0;
//     vm.sec = 0;
//     vm.min = 0;
//     vm.hr = 0;
//     vm.run_code = 0;
//     vm.backspaceTime = 0;
//     clearInterval(dt);
//     // $(".time").text("時間 0:0");
//     one = 0;
//   });


