-- 코드를 입력하세요
SELECT * from
(SELECT USER_ID,NICKNAME, sum(price) as TOTAL_SALES from USED_GOODS_BOARD b inner join USED_GOODS_USER u 
on b.WRITER_ID = u.user_id
 where STATUS = 'DONE'
group by USER_ID,NICKNAME)
where TOTAL_SALES > 699999
order by TOTAL_SALES asc