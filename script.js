  const cards = document.querySelectorAll('.card');
  const lists = document.querySelectorAll('.list');
  const addTaskBtn = document.getElementById('add-task-btn');
  const taskInput = document.getElementById('task-input');
  const todoList = document.getElementById('list1');

    for( const card of cards) {
      card.addEventListener('dragstart', dragStart);
      card.addEventListener('dragend', dragEnd);
    }

    for( const list of lists) {
      list.addEventListener('dragover', dragOver);
      list.addEventListener('dragenter', dragEnter);
      list.addEventListener('dragleave', dragLeave);
      list.addEventListener('drop', dragDrop);
    }

    function dragStart (e) {
      e.dataTransfer.setData('text/plain', this.id);
    }

    function dragEnd () {
      console.log('drag ended');
    }

    function dragOver(e){
       e.preventDefault();
    }

    function dragLeave(e) {
      this.classList.remove("over");
    }

    function dragEnter(e){
       e.preventDefault();
       this.classList.add('over');
    }

    function dropOver(e) {
      this.classList.remove('over');
    }

    function dragDrop(e){
      const id = e.dataTransfer.getData('text/plain');
      const card = document.getElementById(id);
      this.appendChild(card);
      this.classList.remove('over');
    }


  let cardIdCounter = 100; // To avoid ID clashes

  addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const newCard = document.createElement('div');
    newCard.className = 'card';
    newCard.draggable = true;
    newCard.id = 'card' + cardIdCounter++;
    newCard.textContent = taskText;

    // Add drag events to the new card
    newCard.addEventListener('dragstart', dragStart);
    newCard.addEventListener('dragend', dragEnd);

    todoList.appendChild(newCard);
    taskInput.value = '';
  });

  taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addTaskBtn.click();
    }
  });


