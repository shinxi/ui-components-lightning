const IconColor = (fillColor, category, icon) => {
  let iconColor = null;
  if (category === 'custom') {
    iconColor = icon.replace(/^custom/, 'custom-');
  } else if (category === 'action') {
    iconColor = icon.replace(/^new_custom/, 'custom-');
  } else if (fillColor) {
    iconColor = fillColor;
  } else if (category === 'doctype' || category === 'utility') {
    iconColor = null;
  } else {
    iconColor = `${category}-${(icon || '').replace(/_/g, '-')}`;
  }
  return iconColor;
};

export default IconColor;
