'use strict'
module.exports = (sequelize, DataTypes) => {
	const Portfolio = sequelize.define(
		'Portfolio',
		{
			id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				primaryKey: true,
				autoIncrement: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			userId: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: false,
			},
			scheme_codes : {
				type : DataTypes.ARRAY(DataTypes.INTEGER),
				allowNull: false,
				defaultValue: [],
			}
		},
		{ sequelize, modelName: 'Portfolio', tableName: 'portfolioss', freezeTableName: true, paranoid: true }
	)
	
	return Portfolio
}
