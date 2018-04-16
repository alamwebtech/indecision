console.log("app.js is runnig");

// JSX = Javascript XML

const app = {
	title: "Indecission App",
	subtitle: "Put Your life in the handle of a computer",
	options: []
};

const onFormSubmit = (e)=>{
	e.preventDefault();
	
	const option = e.target.elements.option.value;
	if (option){
		app.options.push(option);
		e.target.elements.option.value = '';
		appRender();
	}
};


	const myApp = document.querySelector("#app");

const appRender = () => {
	const template = (
	<div>
	<h1>{app.title}</h1>
	{app.subtitle && <p>{app.subtitle}</p>}
	<p>{app.options.length > 0 ? "Here are your Options" : "No Options"}</p>
	
	<p> {app.options.length} </P>
   
	
	<ol>
	<li>Item One</li>
	<li>Item Two</li>
	</ol>
		
    <form onSubmit={onFormSubmit}>
	<input type='text' name='option'/>
	<button>Add Option</button>
	</form>
	</div>
	);
	
	ReactDOM.render(template, myApp);
};

appRender();