import { Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommentProps{
    content: string;
    onDeleteComment: (comment: string) => void;
}

export function Comment( { content, onDeleteComment }: CommentProps){

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        console.log('ola')

        onDeleteComment(content);
    }

    function handleLikeComment(){
        setLikeCount((state) =>{
            return state + 1
        });

    }

    return(
        <div className={styles.comment}>
            <Avatar 
                hasBorder={false} 
                src='https://avatars.githubusercontent.com/u/50754896?v=4' 
                alt=''
                
            />
            
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authotAndtime}>
                            <strong>Edilson De França</strong>
                            <time title='28 de julho' dateTime='2022 -07 - 28 21:10:10 '>Cerca de 1 hora atrás</time>

                        </div>
                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{ content }</p>
                    
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        < ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}