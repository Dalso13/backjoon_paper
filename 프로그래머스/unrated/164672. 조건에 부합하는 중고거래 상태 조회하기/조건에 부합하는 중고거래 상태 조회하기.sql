-- 코드를 입력하세요
SELECT BOARD_ID,WRITER_ID,	TITLE,PRICE,
case
when status = 'done' then '거래완료'
when status = 'sale' then '판매중'
when status = 'reserved' then '예약중'
end as STATUS
from USED_GOODS_BOARD
where CREATED_DATE = '2022-10-05'
ORDER BY BOARD_ID DESC