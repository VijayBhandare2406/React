import './App.css';

function App() {
  return (
    <div style={{ padding: '30px 100px' }}>
      
      <h1>React Development Notes</h1>

      <p>
        These notes cover the basic Terminal, Node.js, NPM, Vite and Git
        commands used while developing a React application.
      </p>

      <hr />

      {/* ===================================================== */}
      {/* 1. TERMINAL */}
      {/* ===================================================== */}

      <h2>1. Terminal Basics</h2>

      <h3>Q1. What is Terminal?</h3>

      <p>
        <strong>Answer:</strong> Terminal is a command-line interface where
        we can communicate with the computer by typing commands.
      </p>

      <p>
        <strong>Why do we use it?</strong>
      </p>

      <ul>
        <li>Create and open folders.</li>
        <li>Create files.</li>
        <li>Run JavaScript and React applications.</li>
        <li>Install packages using NPM.</li>
        <li>Work with Git and GitHub.</li>
      </ul>

      <p>
        <strong>Used in:</strong> React, Node.js, Git, NPM and general
        development.
      </p>


      <h3>Q2. How can I check my current folder?</h3>

      <p>
        <strong>Answer:</strong> Use the <code>pwd</code> command.
      </p>

      <pre>pwd</pre>

      <p>
        <strong>Why?</strong> It tells you exactly which directory/folder
        you are currently inside.
      </p>

      <p>
        <strong>Example:</strong>
      </p>

      <pre>/Users/vijaybhandare/Work/React</pre>

      <p>
        This is useful when you are working with multiple React projects and
        are not sure where the Terminal is currently located.
      </p>


      <h3>Q3. How can I see files and folders?</h3>

      <p>
        <strong>Answer:</strong> Use the <code>ls</code> command.
      </p>

      <pre>ls</pre>

      <p>
        <strong>Why?</strong> It shows the files and folders inside the
        current directory.
      </p>

      <p>
        <strong>Example:</strong>
      </p>

      <pre>
        src
        public
        package.json
        vite.config.js
      </pre>


      <h3>Q4. How can I move into a folder?</h3>

      <p>
        <strong>Answer:</strong> Use the <code>cd</code> command.
      </p>

      <pre>cd foldername</pre>

      <p>
        <strong>Example:</strong>
      </p>

      <pre>cd 01vitereact</pre>

      <p>
        <strong>Why?</strong> Before running commands, you need to be inside
        the correct project folder.
      </p>


      <h3>Q5. How can I go back one folder?</h3>

      <p>
        <strong>Answer:</strong> Use:
      </p>

      <pre>cd ..</pre>

      <p>
        <strong>Why?</strong> It moves you one directory level backward.
      </p>


      <h3>Q6. How can I create a folder?</h3>

      <p>
        <strong>Answer:</strong> Use <code>mkdir</code>.
      </p>

      <pre>mkdir foldername</pre>

      <p>
        <strong>Example:</strong>
      </p>

      <pre>mkdir components</pre>

      <p>
        <strong>Why?</strong> Used when you need to create a new directory,
        for example a React <code>components</code> folder.
      </p>


      <h3>Q7. How can I create a new file from Terminal?</h3>

      <p>
        <strong>Answer:</strong> Use <code>touch</code>.
      </p>

      <pre>touch test.js</pre>

      <p>
        <strong>Why?</strong> It creates an empty file.
      </p>

      <p>
        <strong>Important:</strong> <code>touch</code> only creates the file.
        It does not automatically add JavaScript code to it.
      </p>


      <hr />

      {/* ===================================================== */}
      {/* 2. NODE.JS */}
      {/* ===================================================== */}

      <h2>2. Node.js</h2>

      <h3>Q8. What is Node.js?</h3>

      <p>
        <strong>Answer:</strong> Node.js allows JavaScript to run outside
        the browser.
      </p>

      <p>
        Normally JavaScript runs inside browsers such as Chrome.
        Node.js allows us to run JavaScript from Terminal.
      </p>

      <p>
        <strong>Why do we use it?</strong>
      </p>

      <ul>
        <li>Run JavaScript files.</li>
        <li>Run development tools.</li>
        <li>Use NPM packages.</li>
        <li>Run React/Vite development commands.</li>
      </ul>


      <h3>Q9. How can I run a JavaScript file using Node.js?</h3>

      <p>
        <strong>Answer:</strong>
      </p>

      <pre>node test.js</pre>

      <p>
        <strong>Example:</strong>
      </p>

      <pre>console.log("Hello Vijay");</pre>

      <p>Then run:</p>

      <pre>node test.js</pre>

      <p>
        <strong>Output:</strong>
      </p>

      <pre>Hello Vijay</pre>

      <p>
        <strong>Common issue:</strong> If Node cannot find the file, you may
        see <code>MODULE_NOT_FOUND</code>. This usually means you are in the
        wrong folder or the file does not exist at that path.
      </p>


      <hr />

      {/* ===================================================== */}
      {/* 3. NPM */}
      {/* ===================================================== */}

      <h2>3. NPM</h2>

      <h3>Q10. What is NPM?</h3>

      <p>
        <strong>Answer:</strong> NPM stands for <strong>Node Package Manager</strong>.
      </p>

      <p>
        It is used to install, manage and run JavaScript packages and
        development tools.
      </p>

      <p>
        <strong>Why do we use it?</strong>
      </p>

      <ul>
        <li>Install React and other packages.</li>
        <li>Install project dependencies.</li>
        <li>Run project scripts.</li>
        <li>Manage package versions.</li>
      </ul>


      <h3>Q11. How can I create a Vite project?</h3>

      <p>
        <strong>Answer:</strong>
      </p>

      <pre>npm create vite@latest</pre>

      <p>
        <strong>Why?</strong> Vite provides the development setup required
        to create and run a modern React application.
      </p>

      <p>
        During setup you select:
      </p>

      <pre>
        Framework: React
        Variant: JavaScript
      </pre>


      <h3>Q12. What does npm install do?</h3>

      <p>
        <strong>Answer:</strong>
      </p>

      <pre>npm install</pre>

      <p>
        It reads the project's <code>package.json</code> and installs the
        required dependencies.
      </p>

      <p>
        <strong>Why?</strong> Without installing dependencies, the project
        may not have the packages required to run.
      </p>

      <p>
        It normally creates the <code>node_modules</code> folder.
      </p>


      <h3>Q13. How can I start my React project?</h3>

      <p>
        <strong>Answer:</strong>
      </p>

      <pre>npm run dev</pre>

      <p>
        <strong>Why?</strong> It starts the Vite development server.
      </p>

      <p>
        After running it, Vite normally gives you a local URL such as:
      </p>

      <pre>http://localhost:5173</pre>


      <h3>Q14. How can I create a production build?</h3>

      <p>
        <strong>Answer:</strong>
      </p>

      <pre>npm run build</pre>

      <p>
        <strong>Why?</strong> It creates an optimized production version of
        your React application.
      </p>

      <p>
        <strong>Used when:</strong> You want to prepare the project for
        deployment.
      </p>


      <hr />

      {/* ===================================================== */}
      {/* 4. GIT */}
      {/* ===================================================== */}

      <h2>4. Git & GitHub</h2>

      <h3>Q15. What is Git?</h3>

      <p>
        <strong>Answer:</strong> Git is a version control system.
      </p>

      <p>
        It tracks changes made to your code.
      </p>

      <p>
        <strong>Why do we use it?</strong>
      </p>

      <ul>
        <li>Track code changes.</li>
        <li>Save different versions of a project.</li>
        <li>Go back to previous versions.</li>
        <li>Work with other developers.</li>
        <li>Upload projects to GitHub.</li>
      </ul>


      <h3>Q16. What does git init do?</h3>

      <pre>git init</pre>

      <p>
        <strong>Answer:</strong> It initializes Git inside the current
        project folder.
      </p>

      <p>
        <strong>Why?</strong> It tells Git that this folder should be
        treated as a Git repository.
      </p>


      <h3>Q17. How can I check which files have changed?</h3>

      <pre>git status</pre>

      <p>
        <strong>Answer:</strong> It shows the current Git status of your
        project.
      </p>

      <p>
        <strong>Why?</strong> Before committing, you can see which files
        were modified, added or deleted.
      </p>


      <h3>Q18. What does git add . do?</h3>

      <pre>git add .</pre>

      <p>
        <strong>Answer:</strong> It stages all changed files.
      </p>

      <p>
        <strong>Why?</strong> Git needs to know which changes should be
        included in the next commit.
      </p>


      <h3>Q19. What is a Git commit?</h3>

      <pre>git commit -m "Update React project"</pre>

      <p>
        <strong>Answer:</strong> A commit saves a snapshot of the staged
        changes in Git history.
      </p>

      <p>
        <strong>Why?</strong> It creates a saved point that you can refer
        back to later.
      </p>


      <h3>Q20. What does git push do?</h3>

      <pre>git push</pre>

      <p>
        <strong>Answer:</strong> It uploads your local Git commits to the
        remote repository, such as GitHub.
      </p>

      <p>
        <strong>Why?</strong> So your latest committed code is available on
        GitHub.
      </p>


      <h3>Q21. What does git pull do?</h3>

      <pre>git pull</pre>

      <p>
        <strong>Answer:</strong> It downloads the latest changes from the
        remote Git repository and integrates them into your local project.
      </p>

      <p>
        <strong>Why?</strong> Useful when changes were made on GitHub or by
        another developer and you need those changes locally.
      </p>


      <hr />

      {/* ===================================================== */}
      {/* 5. WORKFLOW */}
      {/* ===================================================== */}

      <h2>5. React Development Workflow</h2>

      <h3>Q22. What is the basic workflow for a React project?</h3>

      <p>
        <strong>Answer:</strong>
      </p>

      <pre>
        {`cd 01vitereact
        npm install
        npm run dev`}
      </pre>

      <p>
        <strong>Step 1:</strong> Go inside the React project.
      </p>

      <p>
        <strong>Step 2:</strong> Install dependencies.
      </p>

      <p>
        <strong>Step 3:</strong> Start the development server.
      </p>


      <h3>Q23. What is the basic Git workflow?</h3>

      <p>
        <strong>Answer:</strong>
      </p>

      <pre>
        {`git status
        git add .
        git commit -m "Update React project"
        git push`}
      </pre>

      <p>
        <strong>Meaning:</strong>
      </p>

      <ol>
        <li>Check what changed.</li>
        <li>Stage the changes.</li>
        <li>Save the changes in Git history.</li>
        <li>Upload the commit to GitHub.</li>
      </ol>


      <hr />

      {/* ===================================================== */}
      {/* 6. REACT PROJECT FILES */}
      {/* ===================================================== */}

      <h2>6. Important React/Vite Files</h2>

      <h3>Q24. What is package.json?</h3>

      <p>
        <strong>Answer:</strong> It contains project information,
        dependencies and NPM scripts.
      </p>

      <p>
        <strong>Example:</strong>
      </p>

      <pre>
          {`"scripts": {
            "dev": "vite",
            "build": "vite build"
          }`}
      </pre>


      <h3>Q25. What is node_modules?</h3>

      <p>
        <strong>Answer:</strong> It contains the packages installed for the
        project.
      </p>

      <p>
        <strong>Important:</strong> You normally do not manually edit files
        inside <code>node_modules</code>.
      </p>


      <h3>Q26. What is the src folder?</h3>

      <p>
        <strong>Answer:</strong> <code>src</code> contains the main source
        code of your React application.
      </p>

      <p>For example:</p>

      <pre>
          src/
          ├── App.jsx
          ├── App.css
          └── main.jsx
      </pre>


      <h3>Q27. What is App.jsx?</h3>

      <p>
        <strong>Answer:</strong> <code>App.jsx</code> is commonly used as
        the main/root React component of the application.
      </p>

      <p>
        Components, JSX, HTML-like structure and React logic can be written
        here.
      </p>


      <h3>Q28. What is main.jsx?</h3>

      <p>
        <strong>Answer:</strong> <code>main.jsx</code> is the entry point
        where the React application is connected to the HTML page.
      </p>

      <p>
        It usually renders the <code>App</code> component into the root HTML
        element.
      </p>


      <h3>Q29. What is the public folder?</h3>

      <p>
        <strong>Answer:</strong> It is used for static assets that need to
        be served directly.
      </p>

      <p>
        <strong>Examples:</strong> images, icons and other public files.
      </p>


      <h3>Q30. What is vite.config.js?</h3>

      <p>
        <strong>Answer:</strong> It contains configuration for Vite.
      </p>

      <p>
        <strong>Why?</strong> Developers can customize how Vite handles
        development and build processes.
      </p>

      <hr />

      {/* ===================================================== */}
      {/* 8. QUICK REVISION */}
      {/* ===================================================== */}

      <h2>8. Quick Revision</h2>

      <pre>
          {`Terminal
          pwd       → Current location
          ls        → Show files/folders
          cd        → Move into folder
          cd ..     → Go back
          mkdir     → Create folder
          touch     → Create file

          Node.js
          node file.js → Run JavaScript

          NPM
          npm install       → Install dependencies
          npm run dev       → Start development server
          npm run build     → Production build

          Git
          git init          → Initialize Git
          git status        → Check changes
          git add .         → Stage changes
          git commit        → Save changes
          git push          → Upload to GitHub
          git pull          → Get latest changes`}
      </pre>

    </div>
  );
}

export default App;