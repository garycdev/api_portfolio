import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'visitas',
    timestamps: false,
})
export class Visita extends Model<Visita> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    })
    id_visita: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    ip: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
        defaultValue: DataType.NOW,
    })
    timestamp: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    browser: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    hostname: string;

    @Column({
        type: DataType.JSON,
        allowNull: false,
    })
    device: object;
}
