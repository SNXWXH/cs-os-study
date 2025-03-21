# 컴퓨터 구조 시작하기

## 컴퓨터 구조를 알아야 하는 이유

### 문제 해결

컴퓨터 구조를 알고있으면

올바르게 작성한 코드가 제대로 작동하지 않을경우

= 코드외 컴퓨터 구조에 대한 이해지식이 있기때문에 문제 해결의 실마리 찾기 가능

∴ 이러한 역량의 중요성을 기업에서도 알기 때문에 면접에서도 구조에 대한 소양을 자주 검증

### 성능,용량,비용

웹사이트 개발시 많은 사용자들에게 선보이려면
컴퓨터의 '사양'이 갖춰져야함

= 사양이 부족해 성능이 저하된다면 사용자들이 이용하지 않으려함

서버 운용하는데에는 개인용 컴퓨터보단 서버용 컴퓨터가 필요

서버용 컴퓨터 = 서버 직접관리 필요, 초기비용 부담이 큼.

위 조건들을 도와줄 '클라우드 서비스'가 존재함

클라우드 서비스 = 업체에서 사양을 대여해주고 관리도 직접 해줌, 초기비용 부담도 적지만 주기적으로 비용을 지불해야함

대표적으로 AWS에서 하고있고 삼성,에어비엔비,넷플릭스 등 업체에서 이용중

∴ 장기적으로 이용할 목적이라면 초기비용이 부담이 되지않고 서버 관리를 할능력이 된다면 서버용 컴퓨터를 구매하고,<br>반대라면 클라우드 서비스를 이용할것

이렇게 컴퓨터 구조를 이해하게 된다면 컴퓨터란 '미지의 대상'에서 '분석의 대상'으로 인식하게 됨.

## 컴퓨터 구조의 큰 그림

### 컴퓨터가 이해하는 정보

컴퓨터는 0과 1로 이루어진 '데이터'와 '명령어'만 이해

데이터 = 숫자,문자,이미지,동영상 같은 정적인 정보
명령어 = 컴퓨터를 작동시키는 정보

ex: '1과 2를 더하라'에서
'1','2' = 데이터, ~를 더하라 = 명령어

### 컴퓨터의 4가지 핵심 부품

스마트폰,노트북,서버 컴퓨터등 컴퓨터의 종류는 다양하지만,
용도를 막론하고 이루는 핵심부품은 전부 동일함.

![컴퓨터 구조 사진](https://hongong.hanbit.co.kr/wp-content/uploads/2022/09/%EC%BB%B4%ED%93%A8%ED%84%B0%EC%9D%98-%EA%B5%AC%EC%A1%B0.png)

###### 중앙처리장치(CPU)

ALU, 레지스터, 제어장치로 이루어져 있으며<br>
ALU는 연산 담당 역할,<br>
레지스터는 기억을 잠깐 도와주는 역할,<br>
제어장치는 일처리를 순서대로 조율하는 역할

###### 메모리(RAM)

'데이터'와 '명령어'를 저장하는 부품

![램 사진](https://hongong.hanbit.co.kr/wp-content/uploads/2022/09/%EB%A9%94%EB%AA%A8%EB%A6%AC_%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%80%EC%9E%A5.png)

프로그램이 실행되기위해 반드시 메모리에 저장되어 있어야함.

메모리는 가격이 비싸 저장용량이 적어 데이터를 임시로만 저장이 가능<br>
∴ 실행중인 프로그램은 메모리에 저장되지만 컴퓨터를 종료하면 내용이 사라짐

###### 보조기억장치

메모리의 종료하면 내용이 사라지는 단점을 보완해줌.
HDD,SSD,USB 등 컴퓨터를 종료해도 내용이 저장됨.

###### 입출력장치

마이크,스피커,프린터,마우스,키보드 등 컴퓨터 외부에서 연결되어 컴퓨터 내부와 데이터를 주고받는 장치.

###### 메인보드(motherboard)

컴퓨터의 핵심 부품들을 메인보드 내부에 있는 시스템 버스란 통로로 모두 연결시켜주는 판.