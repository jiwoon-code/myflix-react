### Reason for Fail

1. fetch를 이용한 api 구현까지 완료 후 각 component들을 만들어 Home.tsx에 넣어 주었지만 Slider와 Overlay사이의 position 문제인지
   계속 Slider가 겹쳐보였고 Slider마다 스크롤이 생기기 시작했다.
2. 다 지우고 Home.tsx에서 다시 시작하여 MultipleQuery를 사용하여 여러 data,isLoading을 만들었다. 하지만 그렇게 만들어서 Slider를 붙여 보아도
   겹쳐보이면서 여러 스크롤이 생기는건 어쩔수 없었다
3. Position의 absolute와 relative간에서 나오는 css의 문제라 여겨지지만 해결 방안을 찾지 못했고 &:nth-child()로 해당 Slider들의 top값을 큰 폭
   으로 바꿔주어도 미묘하게만 바뀔뿐 원하는 모양대로 커스텀되지는 않았다
4. 앞으로 css는 그냥 내가 하고 기능 구현 위주로만 강의를 봐야겠다
   기능구현이 아닌 css때문에 이렇게 막힐 줄은 몰랐다
   삽질도 기록해 놓으면 공부가 될 거라 생각한다.
