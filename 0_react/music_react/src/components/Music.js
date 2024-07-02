
const Music = ({music, idx, musicList, setMusicList}) => {

    const {title, like, boom} = music;


    // 좋아요 증가 버튼
    const addLike = () => {
        const copy = [...musicList];
        copy[idx].like++
        setMusicList(copy);
    }

    // 제목 수정
    const editMusic = () => {
        const newTitle = prompt('변경할 제목을 입력하세요.');
        const copy = [...musicList];
        copy[idx].title = newTitle;
        setMusicList(copy);
    }

    // 제목 삭제: filter
    const deleteMusic = () => {
        const newMusicList = musicList.filter((music, index) => {
        return index != idx;
        })
        setMusicList(newMusicList);
    }

    // 좋아요or싫어요
    const setBoom = () => {
        const copy = [...musicList];
        copy[idx].boom = !musicList[idx].boom;
        setMusicList(copy);
    }


    return ( 
        <div>
        <h2>곡명 : {title}</h2>
        <div>
            <span style={{cursor: "pointer"}} onClick={() => addLike(idx)}>👍😁👍😎</span>
            <span>{like} 좋아요</span>
        </div>

        <div>
            <span style={{cursor: "pointer"}} onClick={() => setBoom(idx)}>
            {boom ? "😆" : "🤔"}

            </span>
        </div>

        <button onClick={() => editMusic(idx)}>수정</button>
        <button onClick={() => deleteMusic(idx)}>삭제</button>
        </div>
    )

}
 
export default Music;