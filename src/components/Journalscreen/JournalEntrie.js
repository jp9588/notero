import React from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote } from '../../actions/notes';



export const JournalEntrie = ({id, date, title, body, url}) => {

    const noteDate=moment(date);
    const dispatch = useDispatch();
    
    
    const handleEdit=()=>{

        dispatch(activeNote(id, {
            date,
            title,
            body,
            url

        }));

    }

  
    
    return (
        <div className='journal__entry'
         onClick={handleEdit}
        >

            {
               
                (url)
                &&
                <div className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url(${url})`
                    
                
                }}
                
            >
                

        </div>
            }

            

            <div className='journal__entry-body'>
                <div>
                    <p className='journal__entry-title'>{title}</p>
                    <p className='journal__entry-content'>
                        {body}
                </p>

                </div>
                
                <p className='journal__entry-date'>
                    <span >{noteDate.format('Do')}</span>{noteDate.format('dddd')}
                                        
                    
                </p>
               


            </div>

            
        </div>
    )
}
