const employees = [
  {
    "id": 1,
    "firstName": "Amit",
    "email": "a@a.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "newTask": 0,
      "completed": 2,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Project Setup",
        "description": "Initial setup of the project repository.",
        "date": "2024-11-01",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Client Meeting",
        "description": "Discuss requirements with the client.",
        "date": "2024-10-28",
        "category": "Meeting"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Documentation",
        "description": "Create user manual for project.",
        "date": "2024-10-30",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Vikram",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Feature Development",
        "description": "Develop the login module.",
        "date": "2024-11-02",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Bug Fixing",
        "description": "Resolve reported UI bugs.",
        "date": "2024-10-27",
        "category": "Maintenance"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Report Review",
        "description": "Review financial reports.",
        "date": "2024-10-31",
        "category": "Review"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Database Migration",
        "description": "Migrate data to new database system.",
        "date": "2024-10-25",
        "category": "Database"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rahul",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "Team Coordination",
        "description": "Coordinate work between teams.",
        "date": "2024-11-01",
        "category": "Management"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Training Session",
        "description": "Attend cybersecurity training.",
        "date": "2024-11-03",
        "category": "Training"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Rohit",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "newTask": 0,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Code Review",
        "description": "Review code for quality assurance.",
        "date": "2024-10-29",
        "category": "Review"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "title": "API Integration",
        "description": "Integrate third-party API for payment.",
        "date": "2024-11-01",
        "category": "Development"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Priya",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumber": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "title": "Content Creation",
        "description": "Draft blog posts for the company website.",
        "date": "2024-11-01",
        "category": "Content"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "title": "Feedback Collection",
        "description": "Gather feedback from clients.",
        "date": "2024-10-28",
        "category": "Research"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "title": "Event Planning",
        "description": "Plan the upcoming company event.",
        "date": "2024-10-30",
        "category": "Planning"
      }
    ]
  }
];

const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}


export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    // console.log(employees,admin)    
    return {employees,admin}
}


export const addTaskEmployee = (employeeId, newTask) => {
  const {employees} = getLocalStorage()

  const updatedEmployees = employees.map(employee => {
    if (employee.id == employeeId) {
      // return {
      //   ...employee,
      //   tasks:[...employee.tasks,newTask],
      //   taskNumber:{...employee.taskNumber, newTask:employee.taskNumber.newTask+1}
      // }; 
      employee.tasks.push(newTask)
      employee.taskNumber.newTask = employee.taskNumber.newTask + 1

    }
    return employee
  }) 
  localStorage.setItem('employees',JSON.stringify(updatedEmployees))
}