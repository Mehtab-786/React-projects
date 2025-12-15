import BasicProps from './components/BasicProps'
import ChildrenProps from './components/ChildrenProps'
import ComplexProps from './components/ComplexProps'
import RefProps from './components/RefProps'
import ThemeToggler,{ThemeProvider, useTheme} from './components/ThemeToggler'

function Navigation() {
  const isDark = true;
  const sections = [
    { id: "basic", label: "Basic Props", icon: "💨" },
    { id: "children", label: "Children Props", icon: "🎃" },
    { id: "complex", label: "Complex Props", icon: "🛢️" },
    { id: "ref", label: "Ref Props", icon: "☢️" },
    { id: "theme", label: "Theme Props", icon: "🟩" },
  ];

  return <nav className="h-20 w-full sticky top-0 z-100">
    <div className="w-full h-full flex justify-center items-center gap-5">
      {sections.map(value => (
        <button className="bg-emerald-800 px-4 py-3 rounded-2xl" key={value.id}>{value.label}{value.icon}</button>
      ))}
    </div>
  </nav>;
}

function AppContent() {
  const {isDark} = useTheme();
  return(
    <div className={`min-h-screen w-full ${isDark ? "bg-neutral-800 text-white" : "bg-neutral-300 text-black"}`}>
    <Navigation />
    <h1 className="text-center text-5xl text-blue-500 font-bold mb-10">React Props !!</h1>
    <div className="space-y-10 ">
      <div className="scroll-mt-200 border-2 p-4 border-green-500" id="basic">
        <BasicProps />
      </div>
      <div className="scroll-mt-200 border-2 p-4 border-green-500" id="children">
        <ChildrenProps />
      </div>
      <div className="scroll-mt-200 border-2 p-2" id="complex">
        <ComplexProps />
      </div> 
      <div className="scroll-mt-200 border-2 p-2" id="ref">
        <RefProps />
      </div>
      <div className="scroll-mt-200 border-2 p-2" id="theme">
        <ThemeToggler />
      </div>
    </div>
    </div>
    );
}

function App() {
  return <ThemeProvider>
    <AppContent />
  </ThemeProvider>;
}

export default App;
