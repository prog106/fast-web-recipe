var first = new mojs.Shape({
    shape : 'circle', // 원 그리기
    radius : {0:'rand(30,100)'}, // 객체값으로 변경. 0 > 50 으로 크기를 변경
    scale : 1, // 절대적 크기 x scale
    left : 0,
    top : 0,
    x : 0, // 현재 위치에서 x 축으로 이동 - : 좌측으로 이동
    y : 0, // 현재 위치에서 y 축으로 이동 - : 아래로이동
    fill : 'none', // 색 채우기
    stroke : 'cyan', // 테두리 색
    strokeWidth : {30:0}, // 테두리 두께
});
var seconds = [];
var color = ['deeppink', 'magenta', 'blue', 'tomato', 'black', 'red', 'orange', 'gray']
for(var i=0; i<8; i++) {
    var second = new mojs.Shape({
        parent : first.el, // 종속처리
        shape : 'circle', // 원 그리기
        radius : {0:'rand(50,120)'}, // 객체값으로 변경. 0 > 50 으로 크기를 변경
        scale : 1.5, // 절대적 크기 x scale
        left : '50%',
        top : '50%',
        x : 'rand(-100,100)', // 현재 위치에서 x 축으로 이동 - : 좌측으로 이동
        y : 'rand(-100,100)', // 현재 위치에서 y 축으로 이동 - : 아래로이동
        fill : 'none', // 색 채우기
        stroke : color[i], // 테두리 색
        strokeWidth : {10:0}, // 테두리 두께
        delay: 'rand(100, 800)',
    });
    seconds.push(second);
}

document.addEventListener('click', function(e) {
    first.generate().tune({x:e.pageX, y:e.pageY}).replay(); // tune 마우스 클릭 위치 따라다니기 top, left 는 rand 사용불가.
    //second.generate().tune({x:e.pageX, y:e.pageY}).replay(); // tune 마우스 클릭 위치 따라다니기 top, left 는 rand 사용불가.
    for(var i=0;i<seconds.length;i++) {
        seconds[i].generate().replay();
    }
    //second.generate().replay(); // tune 은 parent 에서 는 사용하지 말자.
});