module.exports = (sequelize, Sequelize) => {
    const Note = sequelize.define("notes", {
        // should contain noteid,title,content
        noteId: {
            type: Sequelize.STRING,
            primaryKey: true
        },
        userId: {
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING
        },
        body: {
            type: Sequelize.TEXT,
        }
    });

    Note.associate = models => {
        Note.belongsTo(models.User, {
            foreignKey: 'id',
            onDelete: 'CASCADE',
        });
    };

    return Note;
};