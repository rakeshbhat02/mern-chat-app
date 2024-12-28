import { useState } from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';
import { getRandomEmoji } from '../../utils/emojis';
import SearchInput from '../sidebar/SearchInput';

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  const [search, setSearch] = useState(''); // Add state for search input

  // Filter conversations based on search input
  const filteredConversations = conversations.filter((conversation) =>
    conversation.fullName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex flex-col overflow-auto">
      {/* Pass search and setSearch to SearchInput */}
      <SearchInput search={search} setSearch={setSearch} />
      <div className='divider px-3'></div>
      {/* Render filtered conversations */}
      <div className="py-2 flex flex-col overflow-auto">
        {loading && <span className="loading loading-spinner mx-auto"></span>}

        {!loading && filteredConversations.length > 0 ? (
        filteredConversations.map((conversation, idx) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            // emoji={getRandomEmoji()}
            lastIdx={idx === filteredConversations.length - 1}
          />
        ))
      ) : (
        !loading && <p className="text-center mt-4">No results found</p>
        )}
      </div>
    </div>
  );
};

export default Conversations;


// import React from 'react'
// import Conversation from './Conversation'
// import useGetConversations from '../../hooks/useGetConversations'
// import { getRandomEmoji } from '../../utils/emojis';

// const Conversations = () => {
//   const {loading, conversations}=useGetConversations();
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         {conversations.map((conversation, idx) => (
//           <Conversation key={conversation._id} conversation={conversation} emoji={getRandomEmoji()}
//           lastIdx={idx === conversations.length-1}/>
//         ))}

//         { loading ? <span className='loading loading-spinner mx-auto'></span>: null}
//     </div>
//   );
// }

// export default Conversations


//Starters Code for Conversations.jsx

// import React from 'react'
// import Conversation from './Conversation'

// const Conversations = () => {
//   return (
//     <div className='py-2 flex flex-col overflow-auto'>
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//         <Conversation />
//     </div>
//   )
// }

// export default Conversations