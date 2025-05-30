# CPU 스케줄링

## CPU 스케줄링 개요

### 프로세스 우선 순위

우선 순위가 높은 프로세스 : 입출력 작업이 많은 프로세스
➡️ 어차피 입출력 장치는 작업을 완료하기 전까지 `대기 상태`

1. `입출력 집중 프로세스` : 비디오 재생 , 디스크 백업 등 담당 프로세스<br>

- `실행 상태` 보다는 입출력 작업을 위한 `대기 상태` 에 많이 비중
- `입출력 버스트` 가 많은 프로세스

⭐️ `입출력 버스트` : 입출력장치를 기다리는 작업

2. `CPU 집중 프로세스` : 연산 , 컴파일 , 그래픽 처리 작업 등 담당 프로세스<br>

- `대기 상태` 보다는 작업 처리를 위한 `실행 상태`에 많이 비중
- `CPU 버스트` 가 많은 프로세스

⭐️ `CPU 버스트` : CPU를 이용하는 작업

### 스케줄링 큐

`스케줄링 큐` : CPU가 처리할 프로세스들의 실행 순서를 정하기 위해 운영체제가 대기열을 관리

-`준비 큐` : CPU를 필요로 하는 프로세스들의 대기 줄<br> -`대기 큐` : 입출력장치 이용을 위해 `대기 상태`에 들어간 프로세스들의 대기 줄

### 선점형과 비선점형 스케줄링

- `선점형 스케줄링` : 운영체제가 현재 프로세스로부터 강제로 다른 프로세스에 자원을 할당
  ➡️ 자원 독점 방지 , 문맥 교환 과정에서 `오버헤드` 가 발생할 수 있음

⭐️ `오버헤드` ⁇ : 특정 작업 수행을 위해 추가적으로 소요되는 시간, 자원

- `비선점형 스케줄링` : 현재 프로세스가 종료되거나 `대기 상태` 에 접어들기 전까지 자원을 독점
  ➡️ 자원을 독점해 당장 자원이 필요한 프로세스도 무작정 대기 , 선점형보다 `오버헤드` 발생률은 적음

## CPU 스케줄링 알고리즘

### 스케줄링 알고리즘의 종류

1. `선입 선처리 스케줄링` (=FCFS 스케줄링)

- 준비 큐에 삽입된 순서대로 프로세스를 처리하는 `비선점형 스케줄링` 방식
- `호위 효과` 가 발생하기 쉬움

⭐️ `호위 효과` : CPU를 오래 사용하는 프로세스 뒤에 짧은 프로세스들이 뒤에 줄지어 대기하는 상황

2. `최단 작업 우선 스케줄링` (=SJF 스케줄링)

- 준비 큐에 삽입된 프로세스들을 CPU 이용 시간이 짧은 프로세스부터 실행하는 방식
- 실행 시간이 긴 프로세스들에게 응답이 좋지 않음
- `비선점형 스케줄링` , `선점형 스케줄링` 둘 다 구현 가능 = `선점형 최단 작업 우선 스케줄링`

3. `라운드 로빈 스케줄링`

- `선입 선처리 스케줄링` + `타임 슬라이스` 인 스케줄링 방식
- `선입 선처리 스케줄링` 은 비선점형이나, `타임 슬라이스` 로 인해 강제로 CPU를 할당할수 있어<br>
  선점형 스케줄링 으로 분류
- `타임 슬라이스`의 크기 배분이 매우 중요

⭐️ `타임 슬라이스` : 각 프로세스가 CPU를 사용할 수 있는 정해진 시간

4. `최소 잔여 시간 우선 스케줄링` (=SRT 스케줄링)

- `최단 작업 우선 스케줄링` + `로빈 라운드 스케줄링`
- 최소 잔여 시간 우선 스케줄링 하 프로세스들은 정해진 `타임 슬라이스` 만큼 CPU 사용
- 다음으로 CPU를 사용할 프로세스로는 남은 잔여 작업 시간이 가장 적은 프로세스 채택

5. `우선 순위 스케줄링`

- 프로세스들에 우선순위를 부여, 우선순위가 높은 순으로 프로세스를 실행
- `기아 현상` 이 발생할 수 있음
- `기아 현상` 을 방지하기 위해 `에이징` 기법 사용

⭐️ `기아 현상` : 준비 큐에 먼저 삽입되어도 우선순위가 낮은 프로세스는 높은 프로세스에 순서가 밀려남
⭐️ `에이징` : 오랫동안 대기한 프로세스의 우선순위를 점차 높임

6. `다단계 큐 스케줄링`

- `우선순위 스케줄링` 의 업그레이드 스케줄링
- 우선순위 별로 준비 큐를 여러 개 사용
- 우선순위가 가장 높은 큐부터 작업, 작업이 끝나면 다음 우선순위 큐 작업
- 마찬가지로 `기아 현상` 이 발생할 수 있음

7. `다단계 피드백 큐 스케줄링`

- `다단계 큐 스케줄링` 의 업그레이드 스케줄링
- 새로 준비 상태가 된 프로세스가 있으면 우선순위가 가장 높은 큐에 삽입 후 `타임 슬라이스` 동안 작동
- 해당 큐에서 작업 완료를 못할 경우 다음 우선 순위 큐에 삽입
- CPU를 짧게 사용하는 `입출력 집중 프로세스` 들이 우선순위가 높은 큐에서 실행
- `다단계 큐 스케줄링` 과 다르게 큐 사이 이동이 되므로 `에이징` 기법 사용으로 `기아 현상` 예방
- 가장 일반적인 CPU 스케줄링
