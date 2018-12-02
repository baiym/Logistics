/**
 * @Desc 用于设置地址栏的默认值
 * @Param string regionInput 地址栏的ID值
 * @Param string province 省份
 * @Param string city 城市
 * @Param string district 地区
 * */
function setRegion(parameters)
{
    var regionInput=$("#"+parameters.regionInput);//地区栏对象
    var province = parameters.province;//省份
    var city = parameters.city;//城市
    var district = parameters.district;//地区
    var str_html='';

    str_html+="<span class='select-item' data-count='province' data-code="+province.id+">"+province.name+"</span>";
    str_html+="/<span class='select-item' data-count='city' data-code="+city.id+">"+city.name+"</span>";
    str_html+="/<span class='select-item' data-count='district' data-code="+district.id+">"+district.name+"</span>";

    regionInput.parent().children('.city-picker-span').children('.placeholder').hide();
    regionInput.parent().children('.city-picker-span').children('.title').html(str_html).show();
}

/**
 * @Desc 用于清空地址栏的值
 * @Param string regionInput 地址栏的ID值
 * */
function resetRegion(parameters)
{
    var regionInput=$("#"+parameters.regionInput);//地区栏对象
    regionInput.parent().children('.city-picker-span').children('.placeholder').show();
    regionInput.parent().children('.city-picker-span').children('.title').html('').hide();
}

/**
 * @Desc 用于获取地址栏的值
 * @Param string regionInput 地址栏的ID值
 * */
function getRegion(parameters)
{
    var regionInput=$("#"+parameters.regionInput);//地区栏对象
    var item=regionInput.parent().children('.city-picker-span').children('.title').children('.select-item');
    var region={};
    item.each(function(i){
        region[$(this).data('count')]=$(this).data('code');
    });
    return JSON.stringify(region);
}