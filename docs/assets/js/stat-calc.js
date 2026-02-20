//changes Slot font colour
function slotChgClass(selectName) {
	var underLoc = selectName.search("_");
	var slotName = selectName.substring(0, underLoc);
	var selectObj = document.getElementById(selectName);
	var slotObj = document.getElementById(slotName);
	var selectObjValue = selectObj.value;
	slotObj.className = selectObjValue;
};

//on change for select elements
var selectElements = document.getElementsByTagName("select");
for (const elem of selectElements) {
	slotChgClass(elem.name);
	statCalc();
	elem.addEventListener('change', (event) => {
		slotChgClass(elem.name);
		statCalc();
	});
};

//on change for radio elements
var radioElements = document.getElementsByTagName("input");
for (const rElem of radioElements) {
	rElem.addEventListener('change', (event) => {
		statCalc();
	});
};
		
//on click for reset button
var resetElement = document.getElementById("myreset");
var frmElement = document.getElementById("frm");
resetElement.addEventListener('click', (event) => {
	frmElement.reset();
	statCalc();
	var selectElements = document.getElementsByTagName("select");
	for (const elem of selectElements) {
		slotChgClass(elem.name);
		statCalc();
		elem.addEventListener('change', (event) => {
			slotChgClass(elem.name);
			statCalc();
		});
	};
});

//Column doubleclick
var thDC = document.getElementsByClassName("dc");
for (const elemDC of thDC) {
	elemDC.addEventListener('dblclick', (event) => {
		var elemRadio = document.getElementsByTagName("input");
		for (const elRad of elemRadio) {
			if (elRad.value.toUpperCase() == elemDC.innerHTML) {
				elRad.checked = 'checked';
			} else {
				elRad.checked = '';						
			};
		};
		statCalc();
	});
};

//Stat calculations
function statCalc() {
	var tot_r_fa = 535 + (205 + (document.getElementById("ba_fa").checked == true) * (1067 + (document.getElementById("ba_rar").value == "cl") * 129)) + (205 + (document.getElementById("m_fa").checked == true) * (1067 + (document.getElementById("m_rar").value == "cl") * 129))
		+ (205 + (document.getElementById("kp_fa").checked == true) * (1067 + (document.getElementById("kp_rar").value == "cl") * 129)) + (205 + (document.getElementById("bp_fa").checked == true) * (1067 + (document.getElementById("bp_rar").value == "cl") * 129))
		+ (205 + (document.getElementById("g_fa").checked == true) * (1067 + (document.getElementById("g_rar").value == "cl") * 129)) + (205 + (1067 + (document.getElementById("h_rar").value == "cl") * 129))
		+ (document.getElementById("gm1_fa").checked == true) * (214 + (document.getElementById("gm1_rar").value == "he") * 53) + (document.getElementById("gm2_fa").checked == true) * (214 + (document.getElementById("gm2_rar").value == "he") * 53)
		+ (document.getElementById("gm3_fa").checked == true) * (214 + (document.getElementById("gm3_rar").value == "he") * 53) + (document.getElementById("gm4_fa").checked == true) * (214 + (document.getElementById("gm4_rar").value == "he") * 53)
		+ (document.getElementById("gm5_fa").checked == true) * (214 + (document.getElementById("gm5_rar").value == "he") * 53)
	var tot_r_st = 535 + (205 + (document.getElementById("ba_st").checked == true) * (1067 + (document.getElementById("ba_rar").value == "cl") * 129)) + (205 + (document.getElementById("m_st").checked == true) * (1067 + (document.getElementById("m_rar").value == "cl") * 129))
		+ (205 + (document.getElementById("kp_st").checked == true) * (1067 + (document.getElementById("kp_rar").value == "cl") * 129)) + (205 + (document.getElementById("bp_st").checked == true) * (1067 + (document.getElementById("bp_rar").value == "cl") * 129))
		+ (205 + (document.getElementById("g_st").checked == true) * (1067 + (document.getElementById("g_rar").value == "cl") * 129)) + (205 + (1067 + (document.getElementById("h_rar").value == "cl") * 129))
		+ (document.getElementById("gm1_st").checked == true) * (214 + (document.getElementById("gm1_rar").value == "he") * 53) + (document.getElementById("gm2_st").checked == true) * (214 + (document.getElementById("gm2_rar").value == "he") * 53)
		+ (document.getElementById("gm3_st").checked == true) * (214 + (document.getElementById("gm3_rar").value == "he") * 53) + (document.getElementById("gm4_st").checked == true) * (214 + (document.getElementById("gm4_rar").value == "he") * 53)
		+ (document.getElementById("gm5_st").checked == true) * (214 + (document.getElementById("gm5_rar").value == "he") * 53)
	var tot_r_el = 535 + (205 + (document.getElementById("ba_el").checked == true) * (1067 + (document.getElementById("ba_rar").value == "cl") * 129)) + (205 + (document.getElementById("m_el").checked == true) * (1067 + (document.getElementById("m_rar").value == "cl") * 129))
		+ (205 + (document.getElementById("kp_el").checked == true) * (1067 + (document.getElementById("kp_rar").value == "cl") * 129)) + (205 + (document.getElementById("bp_el").checked == true) * (1067 + (document.getElementById("bp_rar").value == "cl") * 129))
		+ (205 + (document.getElementById("g_el").checked == true) * (1067 + (document.getElementById("g_rar").value == "cl") * 129)) + (205 + (1067 + (document.getElementById("h_rar").value == "cl") * 129))
		+ (document.getElementById("gm1_el").checked == true) * (214 + (document.getElementById("gm1_rar").value == "he") * 53) + (document.getElementById("gm2_el").checked == true) * (214 + (document.getElementById("gm2_rar").value == "he") * 53)
		+ (document.getElementById("gm3_el").checked == true) * (214 + (document.getElementById("gm3_rar").value == "he") * 53) + (document.getElementById("gm4_el").checked == true) * (214 + (document.getElementById("gm4_rar").value == "he") * 53)
		+ (document.getElementById("gm5_el").checked == true) * (214 + (document.getElementById("gm5_rar").value == "he") * 53)
	var tot_n_fa = 535 + (205 + (document.getElementById("ba_fa").checked == true) * 1067) + (205 + (document.getElementById("m_fa").checked == true) * 1067) + (205 + (document.getElementById("kp_fa").checked == true) * 1067) 
		+ (205 + (document.getElementById("bp_fa").checked == true) * 1067) + (205 + (document.getElementById("g_fa").checked == true) * 1067) + 1272
		+ (document.getElementById("gm1_fa").checked == true) * 267 + (document.getElementById("gm2_fa").checked == true) * 267 + (document.getElementById("gm3_fa").checked == true) * 267 + (document.getElementById("gm4_fa").checked == true) * 267 + (document.getElementById("gm5_fa").checked == true) * 267
	var tot_n_st = 535 + (205 + (document.getElementById("ba_st").checked == true) * 1067) + (205 + (document.getElementById("m_st").checked == true) * 1067) + (205 + (document.getElementById("kp_st").checked == true) * 1067) 
		+ (205 + (document.getElementById("bp_st").checked == true) * 1067) + (205 + (document.getElementById("g_st").checked == true) * 1067) + 1272
		+ (document.getElementById("gm1_st").checked == true) * 267 + (document.getElementById("gm2_st").checked == true) * 267 + (document.getElementById("gm3_st").checked == true) * 267 + (document.getElementById("gm4_st").checked == true) * 267 + (document.getElementById("gm5_st").checked == true) * 267
	var tot_n_el = 535 + (205 + (document.getElementById("ba_el").checked == true) * 1067) + (205 + (document.getElementById("m_el").checked == true) * 1067) + (205 + (document.getElementById("kp_el").checked == true) * 1067) 
		+ (205 + (document.getElementById("bp_el").checked == true) * 1067) + (205 + (document.getElementById("g_el").checked == true) * 1067) + 1272
		+ (document.getElementById("gm1_el").checked == true) * 267 + (document.getElementById("gm2_el").checked == true) * 267 + (document.getElementById("gm3_el").checked == true) * 267 + (document.getElementById("gm4_el").checked == true) * 267 + (document.getElementById("gm5_el").checked == true) * 267

	document.getElementById("r_fa").innerHTML = tot_r_fa;
	document.getElementById("r_st").innerHTML = tot_r_st;
	document.getElementById("r_el").innerHTML = tot_r_el;
	document.getElementById("n_fa").innerHTML = tot_n_fa;
	document.getElementById("n_st").innerHTML = tot_n_st;
	document.getElementById("n_el").innerHTML = tot_n_el;
};