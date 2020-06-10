// Will set state for selected Make. Upon selection, allows user to choose Model and resets Year
export const handleMakeChanges = (selected, setMakeSelected, setModelDisabled, setYearSelected) => {
  setMakeSelected(selected);
  setModelDisabled(false);
  setYearSelected('');
};

// Will set state for selected Model. Upon selection, allows user to choose Year and resets Year
export const handleModelChanges = (selected, setModelSelected, setYearDisabled, setYearSelected) => {
  setModelSelected(selected);
  setYearDisabled(false);
  setYearSelected('');
};

// Will set state for selected Year
export const handleYearChanges = (selected, setYearSelected ) => {
  setYearSelected(selected);
};

// Will reset year and take it out of URL params
export const handleClear = (setYearSelected) => {
  setYearSelected('');
};

// WHEN LIST IS SHOWING 
// When the Make dropdown is clicked and being viewed, it will reset Model along with making them(&Year) unclickable until a Make is chosen
export const disableOtherDropdown = (setModelDisabled, setModelSelected, setYearDisabled,  ) => {
  setModelDisabled(true);
  setModelSelected('');
  setYearDisabled(true);
};

// When the Model dropdown is clicked and being viewed, it will reset Year along with making it unclickable until Model is chosen
export const disableYearDropdown = (setYearDisabled, setYearSelected) => {
  setYearDisabled(true);
  setYearSelected('');
};