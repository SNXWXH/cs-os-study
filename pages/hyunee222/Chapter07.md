# 보조기억장치

## 다양한 보조기억장치

### 하드 디스크

<strong>하드 디스크</strong> = 자기적인 방식으로 데이터를 저장하는 보조기억장치<br>
<strong>플래터<strong> = 하드 디스크에서 실질적으로 <code>트랙</code> 과 <code> 섹터</code> 라는 단위로 데이터가 저장 되는곳<br>
<ul>
  <li><code>스핀들</code> : 플래터를 회전시키는 구성 요소</li>
  <li><code>RPM</code> : 스핀들이 플래터를 돌리는 시간 (RPM 15,000 =  1분에 15,000 바퀴)
  <li><code>헤드</code> : 플래터를 대상으로 데이터를 읽고 쓰는 구성 요소, <code>디스크 암</code>에 부착되서 원하는 위치로 <code>헤드</code>를 이동시킴</li>
  <li><code>실린더</code> : <code>트랙</code>이 위치한 곳을 모아 연결한 논리적 단위
</ul>

---

<h4>하드 디스크가 저장된 데이터에 접근하는데 소요되는 시간</h4>
<ul>
  <li>탐색 시간 : 접근하려는 데이터가 저장된 트랙까지 헤드를 이동시키는 시간</li>
  <li>회전 지연 : 헤드가 있는곳으로 플래터를 회전시키는 시간</li>
  <li>전송 시간 : 하드 디스크와 컴퓨터 간에 데이터를 전송하는 시간</li>
</ul>

### 플래시 메모리

<strong>플래시 메모리</strong> = 전기적으로 데이터를 읽고 쓸수 있는 저장 장치<br>
<ul>
  <li>USB 메모리</li>
  <li>SD 카드</li>
  <li>SSD</li>
</ul>

<code>셀</code> = 플래시 메모리에서 데이터를 저장하는 가장 작은 단위,<br>
셀이 모여 MB,GB,TB 용량을 갖는 저장 장치가 됨

<ul>
  <li>SLC : 한 셀에 1비트 저장</li>
  <li>MLC : 한 셀에 2비트 저장</li>
  <li>TLC : 한 셀에 3비트 저장</li>
</ul>

∴ 데이터 입출력의 속도 : SLC > MLC > TLC (왼쪽부터 빠른 순)

<h4>플래시 메모리의 단위</h4>
<ol>
  <li>셀 : 플래시 메모리에서 가장 작은 단위</li>
  <li>페이지 : 셀이 모여 만들어진 단위</li>
  <li>블록 : 페이지가 모여 만들어진 단위</li>
  <li>플레인 : 블록이 모여 만들어진 단위</li>
  <li>다이 : 플레인이 모여 만들어진 단위</li>
</ol>

<h4>페이지가 가지는 상태</h4>
<ul>
  <li>Free : 어떠한 데이터도 저장하지 않은 새 데이터 저장 가능한 상태</li>
  <li>Vaild : 이미 유효한 데이터를 저장하고 있는 상태</li>
  <li>Invaild : 유효하지 않은 데이터를 저장하고 있는 상태</li>
</ul>

➡️ 플래시 메모리는 덮어쓰기가 불가능하여 Vaild 상태엔 새 데이터 저장 불가

<code>가비지 컬렉션</code> : 유효한 페이지들을 새 블록으로 복사한 뒤 기존의 Invaild 블록을 삭제
