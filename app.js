const appName = "Task Manager";
const tasks = [];

function showWelcomeMessage() {
    alert(`${appName}ga xush kelibsiz. Siz o'z tasklaringizni yaratishingiz mumkin.`);
}

const addTask = () => {
    const taskTitle = prompt("Task nomini kiriting: ");
    if (taskTitle) {
        const newTask = {
            id: tasks.length + 1,
            title: taskTitle,
            completed: false
        };
        tasks.push(newTask);
        alert(`Task muvofaqiyatli qo'shildi: "${taskTitle}" `);
    } else {
        alert("Task nomi boʻsh boʻlishi mumkin emas!");
    }
};

const viewTask = () => {
    if (tasks.length === 0) {
        alert("Hech qanday task mavjud emas!");
    } else {
        let taskList = "Mana sizning tasklaringiz:";
        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            taskList += `\nID: ${task.id},  Nomi: ${task.title},  Yakunlanganmi: ${task.completed ? "Ha" : "Yo'q"}`;
        }
        alert(taskList);
    }
};

const toggleTask = () => {
    const taskId = parseInt(prompt("Bajarilgan task DIsini kiriting: "));
    const task = tasks.find(task => task.id === taskId);
    if (task) {
        task.completed = !task.completed;
        alert(`"${task.title}" task ${task.completed ? "yakunlandi" : "yakunlanmadi"}`);
    } else {
        alert("Task IDsi xato!");
    }
};

const removeTask = () => {
    const taskId = parseInt(prompt("O'chirish uchun task IDsini kiriting: "));
    const taskIndex = tasks.findIndex(task => task.id === taskId);

    if (taskIndex !== -1) {
        const removedTask = tasks.splice(taskIndex, 1)[0];
        alert(`"${removedTask.title}" task muvofaqiyatli o'chirildi!`);
    } else {
        alert("Task IDsi xato!");
    }
};

const displaySummary = function () {
    const completedTasksCount = tasks.filter(task => task.completed).length;
    const incompletedTasksCount = tasks.length - completedTasksCount;
    alert(`
        Xulosa: 
        Umumiy tasklar: ${tasks.length}
        Yakunlangan: ${completedTasksCount}
        Yakunlanmagan: ${incompletedTasksCount}
    `);
};

function showMainMenu() {
    let choice;
    do {
        choice = prompt(
            `${appName}ga xush kelibsiz!
            Variantni tanlang:
                1. Task qo'shish
                2. Tasklarni ko'rish
                3. Task bajarilganligini belgilash
                4. Taskni olib tashlash
                5. Task xulosasi
                6. Chiqish`
        );
        switch (choice) {
            case "1":
                addTask();
                break;
            case "2":
                viewTask();
                break;
            case "3":
                toggleTask();
                break;
            case "4":
                removeTask();
                break;
            case "5":
                displaySummary();
                break;
            case "6":
                alert("Xayr!");
                break;
            default:
                alert("Xato variant. Iltimos, qayta urinib koʻring.");
        }
    } while (choice !== "6");
}

showWelcomeMessage();
showMainMenu();
