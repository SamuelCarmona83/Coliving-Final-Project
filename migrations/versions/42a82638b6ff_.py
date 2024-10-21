"""empty message

<<<<<<<< HEAD:migrations/versions/42a82638b6ff_.py
Revision ID: 42a82638b6ff
Revises: 
Create Date: 2024-10-21 13:12:38.238747
========
Revision ID: 0715272c7c88
Revises: 
Create Date: 2024-10-19 13:47:23.144819
>>>>>>>> 323ae716aacb2b00fec268ad43e8df5fda9b1590:migrations/versions/0715272c7c88_.py

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
<<<<<<<< HEAD:migrations/versions/42a82638b6ff_.py
revision = '42a82638b6ff'
========
revision = '0715272c7c88'
>>>>>>>> 323ae716aacb2b00fec268ad43e8df5fda9b1590:migrations/versions/0715272c7c88_.py
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('property',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=120), nullable=False),
    sa.Column('price', sa.String(length=80), nullable=False),
    sa.Column('address', sa.String(length=80), nullable=False),
    sa.Column('files', sa.String(length=80), nullable=False),
    sa.Column('stay', sa.String(length=80), nullable=False),
    sa.Column('description', sa.String(length=80), nullable=False),
    sa.Column('rules', sa.String(length=80), nullable=False),
    sa.Column('laundry', sa.Boolean(), nullable=False),
    sa.Column('parcking', sa.Boolean(), nullable=False),
    sa.Column('air_conditioning', sa.Boolean(), nullable=False),
    sa.Column('is_cancelable', sa.Boolean(), nullable=False),
    sa.Column('floor_type', sa.String(length=80), nullable=False),
    sa.Column('rooms_number', sa.Integer(), nullable=False),
    sa.Column('restrooms', sa.Integer(), nullable=False),
    sa.Column('beds', sa.Integer(), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('name')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=80), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('first_name', sa.String(length=80), nullable=False),
    sa.Column('last_name', sa.String(length=80), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    op.drop_table('property')
    # ### end Alembic commands ###