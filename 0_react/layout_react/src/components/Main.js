const Main = () => {

    const style = {
        contain : {
            display: 'flex',
            justifyContent: 'space-around'
        },

    }


    return ( 
        <div>
        <h1>(게시판 화면)</h1>

        <div style={style.contain}>

        <table style={style.t1}>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
          <tr>
            <td>안녕하세요</td>
            <td>유현준입니다.</td>
            <td>방가방가</td>
          </tr>
          <tr>
            <td>안녕하세요</td>
            <td>유현준입니다.</td>
            <td>방가방가</td>
          </tr>
        </table>
        <table style={style.t2}>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
          <tr>
            <td>안녕하세요</td>
            <td>유현준입니다.</td>
            <td>방가방가</td>
          </tr>
          <tr>
            <td>안녕하세요</td>
            <td>유현준입니다.</td>
            <td>방가방가</td>
          </tr>
        </table>
        <table style={style.t3}>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
          <tr>
            <td>안녕하세요</td>
            <td>유현준입니다.</td>
            <td>방가방가</td>
          </tr>
          <tr>
            <td>안녕하세요</td>
            <td>유현준입니다.</td>
            <td>방가방가</td>
          </tr>
        </table>

        </div>

      </div>
     );
}
 
export default Main;