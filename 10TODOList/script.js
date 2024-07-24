document.getElementById('add-button').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();
  

    if (task) {
    
      const li = document.createElement('li');
       // Other way to create 'createTextNode'
      //li.innerHTML = `${task} <button class="remove-button">Remove</button>`;
      
      //one more way to create 'createTextNode
     // const removeButton = document.createElement('button');
     // removeButton.textContent = 'Remove';
    //  removeButton.className = 'remove-button';
    //  li.appendChild(removeButton);
  
  
      const textNode = document.createTextNode(task);
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.className = 'remove-button';
  
      li.appendChild(textNode);
      li.appendChild(removeButton);
  
      document.getElementById('todo-list').appendChild(li);

      input.value = '';
  
      removeButton.addEventListener('click', function() {
        li.remove();
      });
    }
  });
  